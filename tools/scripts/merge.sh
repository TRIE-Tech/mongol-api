#!/bin/bash

# Define color codes
RED="\033[31m"
GREEN="\033[32m"
YELLOW="\033[33m"
RESET="\033[0m"

action_output=""

print_message() {
    local color="$1"
    local message="$2"
    echo -e "${color}${message}${RESET}"
}

deploy_to_prod() {
    local project="$1"
    local output_vercel
    output_vercel=$(bunx nx deploy-prod "$project")
    local production_link
    production_link=$(echo "$output_vercel" | grep -Eo 'https://[^ >]+\.vercel\.app' | tail -1)
    if [[ -n "$production_link" ]]; then
        action_output+="$project production link: $production_link, "
    fi
}

if [[ -n "$NX_BASE" && -n "$NX_HEAD" ]]; then
    affected_projects=$(bunx nx show projects --patterns "apps/*" --affected --base="$NX_BASE" --head="$NX_HEAD")
    affected_files=$(git diff --name-status "$NX_BASE...$NX_HEAD")
else
    print_message "$RED" "Step 2: Could not find HEAD SHA and BASE SHA"
    exit 1
fi

pattern=$(echo "$affected_projects" | grep -oE '[a-zA-Z0-9-]+')

matches=$(echo "$affected_files" | grep -oE "$pattern" | tr ' ' '\n' | sort -u)

IFS=$'\n' read -d '' -ra project_names <<<"$matches"

echo $project_names

deployed_projects=()

for name in "${project_names[@]}"; do
    # Check if the project is not in the deployed_projects array
    if [[ ! " ${deployed_projects[@]} " =~ " ${name} " ]]; then
        case "$name" in
        "mongol-api-data")
            print_message "$GREEN" "There are changes in $name"
            projects=("mongol-api-rest" "mongol-api-web" "mongol-api-graphql" "mongol-api-images-service")
            for project in "${projects[@]}"; do
                print_message "$GREEN" "Step 6: Deploying $project to Production"
                deploy_to_prod "$project"
                deployed_projects+=("$project")
            done
            ;;

        "mongol-api-rest" | "mongol-api-graphql" | "mongol-api-web" | "mongol-api-images-service")
            echo "$name"
            print_message "$GREEN" "Step 6: Deploying $name to Production"
            deploy_to_prod "$name"
            deployed_projects+=("$name")
            ;;
        esac
    fi
done

if [ -n "$action_output" ]; then
    action_output="${action_output%, }"
    action_output=$(echo "$action_output" | sed 's/, /,\n/g')
fi

echo "ACTION_OUTPUT=${action_output}" >>$GITHUB_ENV
echo "::set-output name=action_output::${action_output}"

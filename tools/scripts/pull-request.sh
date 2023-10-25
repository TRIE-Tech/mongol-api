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

deploy_and_get_preview_link() {
    local project="$1"
    local output_vercel
    output_vercel=$(bunx nx preview "$project")
    local preview_link
    preview_link=$(echo "$output_vercel" | grep -Eo 'https://[^ >]+\.vercel\.app' | tail -1)
    if [[ -n "$preview_link" ]]; then
        action_output+="$project Preview: $preview_link, "
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

for name in "${project_names[@]}"; do
    if [ "$name" = "mongol-api-rest" ] || [ "$name" = "mongol-api-graphql" ] || [ "$name" = "mongol-api-web" ] || [ "$name" = "mongol-api-images-service" ]; then
        echo "$name"
        print_message "$GREEN" "Step 6: Deploying $name to preview"
        deploy_and_get_preview_link "$name"
    else
        continue
    fi
done

if [ -n "$action_output" ]; then
    action_output="${action_output%, }"
fi
echo "ACTION_OUTPUT=${action_output}" >>$GITHUB_ENV
echo "::set-output name=action_output::${action_output}"

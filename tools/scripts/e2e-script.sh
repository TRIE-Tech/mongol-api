#!/bin/sh

affected_e2e_test_apps=$(yarn nx show projects --affected --exclude '*,!tag:e2e-test:ready')

# Get command string after execute with --exclude option, so removing it
affected_e2e_test_apps=$(echo "$affected_e2e_test_apps" | sed 's/.*\*,!tag:e2e-test:ready//' | sed "s/'//g")

project_name=$1

echo -e "\n > Running e2e tests for project $project_name \n"

if [[ "$affected_e2e_test_apps" == *"$project_name"* ]]; then
    yarn nx e2e $project_name --skip-nx-cache
    if [[ $? -eq 0 ]]; then
        echo -e "\n > e2e tests passed for project $project_name \n"
        exit 0
    else
        echo -e "\n > e2e tests failed for project $project_name \n"
        exit 1
    fi
else
    echo "Project $project_name is skipped in affected e2e test apps."
fi

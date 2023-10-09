#!/bin/sh

project_name=$1

# Define color codes
GREEN='\033[0;32m' # Green color
RED='\033[0;31m'   # Red color
NC='\033[0m'       # No color

echo -e "\n${GREEN} > Running e2e tests for project $project_name ${NC}\n"

if [[ "$project_name" == "mongol-api-web" ]]; then
    yarn nx e2e $project_name --skip-nx-cache
    if [[ $? -eq 0 ]]; then
        echo -e "\n${GREEN} > e2e tests passed for project $project_name ${NC}\n"
        exit 0
    else
        echo -e "\n${RED} > e2e tests failed for project $project_name ${NC}\n"
        exit 1
    fi
else
    echo "${RED}Project $project_name is skipped in affected e2e test apps.${NC}"
fi

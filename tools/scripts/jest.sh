#!/bin/sh

project_name=$1

# Define color codes
GREEN='\033[0;32m' # Green color
RED='\033[0;31m'   # Red color
NC='\033[0m'       # No color

echo -e "\n${GREEN} > Running unit tests for project $project_name ${NC}\n"

if [[ "$project_name" == "mongol-api-graphql" || "$project_name" == "mongol-api-rest" ]]; then
    yarn nx test $project_name --skip-nx-cache
    if [[ $? -eq 0 ]]; then
        echo -e "\n${GREEN} > unit tests passed for project $project_name ${NC}\n"
        exit 0
    else
        echo -e "\n${RED} > unit tests failed for project $project_name ${NC}\n"
        exit 1
    fi
else
    echo "${RED}Project $project_name is skipped in affected unit test apps.${NC}"
fi

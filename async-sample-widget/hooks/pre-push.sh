#!/bin/bash

increment_version() {
  local delimiter=.
  local array=($(echo "$1" | tr $delimiter '\n'))
  array[$2]=$((array[$2]+1))
  echo $(local IFS=$delimiter ; echo "${array[*]}")
}

echo -e "===\n>> Checking uncommitted changes..."

cd ../../../

git status | grep 'nothing to commit, working tree clean' &> /dev/null

if [[ $? -ne 0 ]]
then
  echo -e "\n🚫 Cannot push because uncommitted changes are present." && exit 1 
fi

echo -e "===\n>> Checking branch name..."

BRANCH=`git rev-parse --abbrev-ref HEAD`
PROTECTED_BRANCHES="^master"

if [[ $1 != *"$BRANCH"* ]]
then
  echo -e "\n🚫 You must use (git push origin $BRANCH).\n" && exit 1
fi

if [[ "$BRANCH" =~ $PROTECTED_BRANCHES ]]
then
  echo -e "\n🚫 Cannot push to remote $BRANCH branch, please create your own branch and use PR." && exit 1
fi

echo -e "===\n>> Increment widget version..."

cd sample-library/litElement/async-sample

CURRENT_VERSION=`grep '"version": "' async-sample-widget.json | sed 's/[^0-9.]//g'`
NEW_VERSION=`increment_version $CURRENT_VERSION 2`
NEW_VERSION_LINE=" \"version\": \"$NEW_VERSION\","

sed -i "/ \"version\":*/c\ $NEW_VERSION_LINE" async-sample-widget.json
sed -i "/ \"version\":*/c\ $NEW_VERSION_LINE" ../../bundle/async-sample-widget/async-sample-widget.json

cd ../../

git add .
git commit -m "async sample widget version increment to $NEW_VERSION"

exit 0
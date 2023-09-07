#!/bin/bash

# The script is intended to increment version from ./async_sample.json file 
# and copy builded to the bundle directory.

increment_version() {
  local delimiter=.
  local array=($(echo "$1" | tr $delimiter '\n'))
  array[$2]=$((array[$2]+1))
  echo $(local IFS=$delimiter ; echo "${array[*]}")
}

CURRENT_VERSION=`grep '"version": "' async-sample-widget.json | sed 's/[^0-9.]//g'`
NEW_VERSION=`increment_version $CURRENT_VERSION 2`

sed -i "s/ASYNC_SAMPLE_WIDGET_VERSION/$NEW_VERSION/g" ./dist/async-sample-widget.js

cp ./dist/async-sample-widget.js ../../bundle/async-sample-widget/async-sample-widget.js
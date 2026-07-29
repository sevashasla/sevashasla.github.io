#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

find $SCRIPT_DIR/images/$1 -type f -iname "*.png" -print0 | while IFS= read -r -d '' file; do
  jpg="${file%.*}.jpg"
  sips -s format jpeg -s formatOptions 70 "$file" --out "$jpg" >/dev/null
  rm "$file"
done

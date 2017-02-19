#!/usr/bin/env bash

function usage() {
  echo
  echo "Usage: swagger-edit <swagger-specification-file.yaml>"
  echo
  exit -1
}

if [ -z "$1" ]; then
  echo "ERROR: no file specified!"
  usage
fi

if [[ ! "$1" =~ yaml$ ]]; then
  echo "ERROR: file should end with .yaml !"
  usage
fi

swaggerFile="/swagger/$1" 
if [ ! -e "$swaggerFile" ]; then
  echo "ERROR: file $1 not exist! (inside docker, $swaggerFile)"
  usage
fi

npm start "$swaggerFile"

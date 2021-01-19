#!/usr/bin/env bash
set -e

npm init

npm install express --save
npm install http-errors --save

echo "start server with:"
echo "$> node app.js"

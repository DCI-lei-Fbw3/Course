#!/usr/bin/env bash

set 

BOOTSTRAP_URL="https://github.com/twbs/bootstrap/releases/download/v4.5.2/bootstrap-4.5.2-dist.zip"

echo "retrieving bootstrap"
wget $BOOTSTRAP_URL -O bootstrap.zip

echo "unzipping the downloaded file"
unzip bootstrap.zip

echo "create a symlink to reference from html-pages"
echo " - so that on an update the html-pages do not need to be changed"
ln -s bootstrap-4.5.2-dist bootstrap

echo "cleanup: removing the downloaded zip-file"
rm bootstrap.zip

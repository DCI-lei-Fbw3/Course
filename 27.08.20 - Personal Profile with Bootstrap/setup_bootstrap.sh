#!/usr/bin/env bash

set -e

wget https://github.com/twbs/bootstrap/releases/download/v4.5.2/bootstrap-4.5.2-dist.zip -O bootstrap.zip

unzip bootstrap.zip

ln -s bootstrap-4.5.2-dist bootstrap

rm bootstrap.zip

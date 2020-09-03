#!/usr/bin/env bash

#set -e

for i in {1..5}; do 
    echo $i
    sleep 1
    for j in {1..3}; do 
        echo "$i: $j" 
    done
done

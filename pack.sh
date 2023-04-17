#!/bin/sh
# Clear previous build
rm ./pack.ovpak | true
rm -rf ./out | true

# Build
yarn run build
rm -rf ./pack | true

# Pack
mkdir -p ./pack
cp ./config.json ./pack/config.json
cp -r ./out ./pack/static
cd ./pack && zip -r ../pack.ovpak .

# Clean
cd ../ && rm -rf ./pack | true
rm -rf ./out | true

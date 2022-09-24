#!/usr/bin/env sh
set -xe
trap exit 1 2 15
apt-get update
apt-get install wget
cd /opt
wget https://github.com/open-telemetry/opentelemetry-cpp-contrib/releases/download/webserver%2Fv1.0.1/opentelemetry-webserver-sdk-x64-linux.tgz
tar xvzf opentelemetry-webserver-sdk-x64-linux.tgz
find ./opentelemetry-webserver-sdk

#!/usr/bin/env bash
. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc
nvm use default
node -v
npm install mojoio -g
npm install tsd -g
npm install greenkeeper -g
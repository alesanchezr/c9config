#!/usr/bin/env bash
. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc
nvm install v4.2.3
nvm alias default v4.2.3

nvm use 4.2.3
node -v
npm install mojoio -g
npm install tsd -g
npm install greenkeeper -g
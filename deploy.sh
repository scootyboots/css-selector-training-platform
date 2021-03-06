#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# get custom 404 page into dist
# needed to get routing working for SPA on github pages
cp 404.html ./dist/404.html

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# uncomment if first time 
# git init
git checkout main
git add -A
git commit -m 'deploy'


# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:scootyboots/css-selector-training-platform.git main:gh-pages

cd -
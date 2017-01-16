#!/usr/bin/env bash

git checkout -b demo-builds

echo "Starting builds"

COMMIT_MSG="Build "$(date +"%s")

echo "Building input-output demo app"
pushd input-output
if [ -d "app" ]; then
    pushd app
    git clean -fdx
    git rm *
    popd
    rmdir app
fi
ng build
mv dist app
git add app
popd

echo "Building form-new-user demo app"
pushd form-new-user
if [ -d "app" ]; then
    pushd app
    git clean -fdx
    git rm *
    popd
    rmdir app
fi
ng build
mv dist app
git add app
popd

echo "Building kitchen-sink-dem demo"
pushd kitchen-sink-demo
if [ -d "app" ]; then
    pushd app
    git clean -fdx
    git rm *
    popd
    rmdir app
fi
npm run build
git add app
popd

echo "Commiting builds"
git commit -m "$COMMIT_MSG"
git checkout master
echo "Build completed"

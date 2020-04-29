#!/bin/bash

docker-compose -f docker-compose.test.yaml up -d
cd server || exit
npm run test
cd ..
docker-compose -f docker-compose.test.yaml down

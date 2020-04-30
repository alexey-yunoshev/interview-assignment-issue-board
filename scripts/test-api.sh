#!/bin/bash

docker-compose -f docker-compose.test-environment.yaml up --build -d
docker-compose -f docker-compose.test-api.yaml up --build
docker-compose -f docker-compose.test-environment.yaml down

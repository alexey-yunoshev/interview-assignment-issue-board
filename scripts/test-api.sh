#!/bin/bash

docker-compose -f docker-compose.test-environment.yaml up --build -d
docker-compose -f docker-compose.test-e2e.yaml up --build
docker-compose -f docker-compose.test-environment.yaml down

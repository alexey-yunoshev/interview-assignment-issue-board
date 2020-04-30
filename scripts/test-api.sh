#!/bin/bash

docker-compose -f docker-compose.test-environment.yaml up -d --remove-orphans
docker-compose -f docker-compose.test-e2e.yaml up --remove-orphans
docker-compose -f docker-compose.test-environment.yaml down

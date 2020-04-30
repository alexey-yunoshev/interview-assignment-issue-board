#!/bin/bash

docker-compose -f docker-compose.test-environment.yaml up --build -d
docker-compose -f docker-compose.test-api.yaml up --build --renew-anon-volumes
docker-compose -f docker-compose.test-environment.yaml down
docker-compose -f docker-compose.test-ui.yaml up
docker-compose -f docker-compose.test-ui.yaml down

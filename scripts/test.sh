#!/bin/bash

set -e

docker-compose -f docker-compose.test-environment.yaml up --build -d
docker-compose -f docker-compose.test-api.yaml up --build --renew-anon-volumes --exit-code-from server
docker-compose -f docker-compose.test-environment.yaml down
docker-compose -f docker-compose.test-ui.yaml up --exit-code-from ui
docker-compose -f docker-compose.test-ui.yaml down

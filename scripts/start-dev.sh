#!/bin/bash

docker-compose -f docker-compose.dev.yaml up --build --remove-orphans --renew-anon-volumes

#!/bin/bash

docker-compose -f docker-compose.prod.yaml up --build --remove-orphans

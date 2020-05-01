docker-compose -f docker-compose.dev.yaml down --remove-orphans -v
docker-compose -f docker-compose.prod.yaml down --remove-orphans -v
docker-compose -f docker-compose.test-environment.yaml down --remove-orphans -v
docker-compose -f docker-compose.test-api.yaml down --remove-orphans -v
docker-compose -f docker-compose.test-ui.yaml down --remove-orphans -v

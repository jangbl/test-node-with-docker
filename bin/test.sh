# spin up postgres database
docker-compose up -d postgres

# wait for Postgres to accept connections
# Postgres usually does not accept connections immediately after it is started up
# that's why we use the pg_isready utility provided by Postgres
# https://www.postgresql.org/docs/current/app-pg-isready.html
echo "[db] not yet ready to accept connections"
WAIT_FOR_PG_ISREADY="while ! pg_isready; do sleep 1; done;"
docker-compose exec postgres bash -c "$WAIT_FOR_PG_ISREADY"
echo "[db] ready to accept connections"

# docker-compose exec postgres psql node_crud productioncoder -c "create user $USER"

# run all tests with Mocha
echo "running all tests..."
mocha --recursive --exit

# tear down db and any other containers that might be running
echo "tearing down all containers..."
docker-compose down -v --remove-orphans

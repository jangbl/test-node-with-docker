# Test a Node.js server with a database with Docker and docker-compose

## How to run this application

### 2.1. Running the project locally

You can run the project locally with your own local Postgres instance

```
npm run dev
```

Make sure to update the configuration app with your database credentials in the `.config/local.json´ file.

### 2.2. Running with docker compose

Running

```
docker-compose up
```

will spin up:

1. express server itself (internally port `8080`) forwarded to port `8080` on the host machine
2. Postgres database (internally `5432`), forwarded to port `2345`

We forward to port `2345` on purpose so it does not collide with a local Postgres instance that might be running on the host machine.

Note that typing `ctrl` + `c` when running `docker-compose up` will only stop the container, but not remove it.
I.e. if you start up the container again, the database will contain the data you have put in before.

If you would like to do a clean run, you can run

```
docker container prune
```

As an alternative you can run

```
docker system prune
```

to remove all unused containers, networks, images.

Running

```
docker-compose up -d
```

will spin up both the databases and the web app in detached mode.

## 3 Testing

### Testing with docker-compose

Running

```
npm test
```

will spin up a Postgres database (internally port `5432`), port-forwarded to port `2345` on the host machine.

It will then run all the tests with `mocha` as a test runner and then destroy the containers afterwards.

By testing with a real database, we achieve a high test-fidelity.

### 3.2 Running tests locally

You can run the tests with your local Postgres database by running

```
npm run test-local
```

Note that this add data to your local database and that the tests might fail if unique constraints are violated.

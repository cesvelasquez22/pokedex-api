<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Pokedex API

Made by [Nest](https://github.com/nestjs/nest) framework TypeScript.

## Development stack

- [Nest CLI](https://docs.nestjs.com/first-steps)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation

```bash
yarn install
```

## Build database

```bash
docker-compose up -d
```

## Environment file
Follow the __env.template__ and create the __.env__ file before running the application.

## Running the app

```bash
# development
yarn start

# watch mode
yarn start:dev

# production mode
yarn start:prod
```

## Populate database - Development

You can populate the database by calling the next request:

```
localhost:3000/api/v2/seed
```

## Build production
Follow the __env.template__ and create the __.env.prod__ file. Remember fill required fields.
Then execute the following script to create the docker image:
```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

## Test

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov
```

## License

Nest is [MIT licensed](LICENSE).

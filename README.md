# Nestjs Boilerplate

## About
This boilerplate contains the following:
 - Docker
 - Unit Tests - [Jest](https://github.com/facebook/jest)
 - Integration Tests - [Jest](https://github.com/facebook/jest) and [Supertest](https://github.com/visionmedia/supertest)
 - Load Tests - [Artillery](https://github.com/artilleryio/artillery)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# integration tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

# load tests
$ npm run test:load
```

## Docker Build and Run

```bash
# Build the docker image
$ docker build -t nestserver .

# Run the docker image
$ docker run -p "3000:3000" nestserver
```

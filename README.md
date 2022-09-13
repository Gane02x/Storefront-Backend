# Storefront Backend Project

## Prerequisites

Make sure you have docker and pSQL installed on your OS to ensure the program workflow

https://www.postgresql.org/download/
https://docs.docker.com/

Create a user and a database in psql

```
CREATE USER exampleUSER WITH PASSWORD 'examplePW';
CREATE DATABASE storefront;
CREATE DATABASE storefront_test;
```

Create an .env File to adjust the environmental variables to your needs
for example

```
  POSTGRES_HOST=127.0.0.1
  POSTGRES_DB=storefront
  POSTGRES_TEST_DB=storefront_test
  POSTGRES_USER=gane02x
  POSTGRES_PASSWORD=password123
  ENV=dev
  BCRYPT_PW=topsecretPW
  SALT_ROUNDS=10
  TOKEN_SECRET=alohomora123!`
```

Make sure that the database.json file matches your environmental variables

### Getting Started

1. Install all dependencies with `npm install`
2. Run database with `npm run db`
3. To migrate all tables to the database run `npm run migrate`
4. Run `npm run start` to run the server

## Running the tests

To run all test run `npm run test`

## Authors

Gabor Nemeth
Udacity

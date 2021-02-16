# How to develop

## Requirements for development

- make (optional but highly recommended)
- docker
- docker-compose

## Introduction

This project is built with docker-compose and make. You can run the commands directly with npm but **it is highly recommended to use make with docker-compose** because you make sure to run it with the same version. Make raises the container with docker-compose, executes the task and removes the container, in this way the local machine is clean once you execute the commands, you can check the [Makefile](../Makefile) file to see what commands you can run.

## Example commands

- with make

```sh
make test
```

- with docker-compose

```sh
docker-compose run --rm main-fns npm run test
```

## Make commands

```sh
make install # install all project dependencies
make install deps="date-fns" # install new dependencie
make install deps="-D typescript" # install new dev dependencies
```

```sh
make build # compile the project to js
```

```sh
make docs # generate documentation page from JSDoc
```

```sh
make lint/check # run lint check
make lint/fix # run lint fix
```

```sh
make test # run the test at the moment with coverage
make test/watch # run the test with coverage and watch all files
make test/all # run lint check and the test
```

```sh
make version/patch # run lint, test, build and docs before update the patch version
make version/minor # run lint, test, build and docs before update the minor version
make version/major # run lint, test, build and docs before update the major version
```

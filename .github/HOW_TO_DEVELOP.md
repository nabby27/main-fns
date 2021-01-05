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
docker-compose up -d
docker-compose exec main-fns npm run test
dokcer-compose down
```

## Make commands

```sh
make install # install all project dependencies
make install ARGS="date-fns" # install new dependencie
make install ARGS="-D typescript" # install new dev dependencies
```

```sh
make build # compile the project to js
```

```sh
make docs # generate documentation page from JSDoc
```

```sh
make eslint-check # run eslint check
make eslint-fix # run eslint fix
```

```sh
make test # run the tests at the moment
make test-watch # run the test with watch all files
make test-coverage # run the test coverage
make test-all # run eslint check and the test coverage
```

```sh
make version-patch # run test all, build and docs before update the patch version
make version-minor # run test all, build and docs before update the minor version
make version-major # run test all, build and docs before update the major version
```

> If you execute the command `make test-watch` make sure to exit with the `q` of the jest watch options and not with `Ctrl C`, because this would finish the `make` task without destroying the docker container.

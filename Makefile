CURRENT_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
SHELL = /bin/sh
CONTAINER_NAME=main-fns

.DEFAULT_GOAL := test

install:
	@docker-compose run --rm $(CONTAINER_NAME) npm install $(deps)

build: install
	@docker-compose run --rm $(CONTAINER_NAME) npm run build
	@docker-compose run --rm $(CONTAINER_NAME) chown -R node:node .

.PHONY: docs
docs:
	@docker-compose run --rm $(CONTAINER_NAME) npm run docs
	@docker-compose run --rm $(CONTAINER_NAME) chown -R node:node .

lint/check:
	@docker-compose run --rm $(CONTAINER_NAME) npm run lint:check
	
lint/fix:
	@docker-compose run --rm $(CONTAINER_NAME) npm run lint:fix

test:
	@docker-compose run --rm $(CONTAINER_NAME) npm run test 
	@docker-compose run --rm $(CONTAINER_NAME) chown -R node:node .

test/watch:
	@docker-compose run --rm $(CONTAINER_NAME) npm run test:watch
	@docker-compose run --rm $(CONTAINER_NAME) chown -R node:node .

test/all: lint/check test

version/patch:
	@docker-compose run --rm $(CONTAINER_NAME) npm run version:patch

version/minor:
	@docker-compose run --rm $(CONTAINER_NAME) npm run version:patch

version/major:
	@docker-compose run --rm $(CONTAINER_NAME) npm run version:patch

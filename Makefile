.PHONY: up stop build install test test-watch test-watch-coverage test-coverage test-all eslint-check eslint-fix version-patch version-minor version-major

CONTAINER_NAME=main-fns

up:
	@docker-compose up -d

stop:
	@docker-compose down

build: up
	@docker-compose exec $(CONTAINER_NAME) npm run build || $(MAKE) stop
	@docker-compose exec $(CONTAINER_NAME) chown -R node:node dist
	${MAKE} stop

docs: up
	@docker-compose exec $(CONTAINER_NAME) npm run docs || $(MAKE) stop
	@docker-compose exec $(CONTAINER_NAME) chown -R node:node docs
	${MAKE} stop

install: up
	@docker-compose exec $(CONTAINER_NAME) npm install $(ARGS) || $(MAKE) stop
	${MAKE} stop

test: up
	@docker-compose exec $(CONTAINER_NAME) npm run test || $(MAKE) stop
	${MAKE} stop

test-watch: up
	@docker-compose exec $(CONTAINER_NAME) npm run test:watch || $(MAKE) stop
	$(MAKE) stop

test-watch-coverage: up
	@docker-compose exec $(CONTAINER_NAME) npm run test:watch:coverage || $(MAKE) stop
	@docker-compose exec $(CONTAINER_NAME) chown -R node:node coverage
	$(MAKE) stop

test-coverage: up
	@docker-compose exec $(CONTAINER_NAME) npm run test:coverage || $(MAKE) stop
	@docker-compose exec $(CONTAINER_NAME) chown -R node:node coverage
	$(MAKE) stop

test-all: up
	@docker-compose exec $(CONTAINER_NAME) npm run test:all || $(MAKE) stop
	$(MAKE) stop

eslint-check: up
	@docker-compose exec $(CONTAINER_NAME) npm run eslint:check || $(MAKE) stop
	${MAKE} stop
	
eslint-fix: up
	@docker-compose exec $(CONTAINER_NAME) npm run eslint:fix || $(MAKE) stop
	${MAKE} stop

version-patch: up
	@docker-compose exec $(CONTAINER_NAME) npm run version:patch || $(MAKE) stop
	${MAKE} stop

version-minor: up
	@docker-compose exec $(CONTAINER_NAME) npm run version:minor || $(MAKE) stop
	${MAKE} stop

version-major: up
	@docker-compose exec $(CONTAINER_NAME) npm run version:major || $(MAKE) stop
	${MAKE} stop


COMPOSE=docker-compose

npx:
	docker build -t npx .

server:
	$(COMPOSE) up -d solaiman.me

generate:
	$(COMPOSE) run --rm generate

deploy:
	$(COMPOSE) run --rm deploy

run:
	docker exec solaiman.me ${CLI}

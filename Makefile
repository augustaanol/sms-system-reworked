# ---------- CONFIG ----------

PROJECT_NAME=sms-platform
BACKEND_SERVICE=backend
WORKER_SERVICE=worker
FRONTEND_SERVICE=frontend

# ---------- DEVELOPMENT ----------

run:
	docker compose up --build

run-d:
	docker compose up -d --build

stop:
	docker compose down

restart:
	docker compose down && docker compose up --build

logs:
	docker compose logs -f

ps:
	docker compose ps


# ---------- BACKEND ----------

backend-shell:
	docker compose exec $(BACKEND_SERVICE) bash

backend-restart:
	docker compose restart $(BACKEND_SERVICE)


# ---------- WORKER ----------

worker-logs:
	docker compose logs -f $(WORKER_SERVICE)

worker-restart:
	docker compose restart $(WORKER_SERVICE)


# ---------- DATABASE ----------

db-shell:
	docker compose exec postgres psql -U postgres

migrate:
	docker compose exec $(BACKEND_SERVICE) alembic upgrade head

migration:
	docker compose exec $(BACKEND_SERVICE) alembic revision --autogenerate -m "$(name)"

downgrade:
	docker compose exec $(BACKEND_SERVICE) alembic downgrade -1


# ---------- API CLIENT ----------

generate-client:
	cd frontend && npm run generate-api


# ---------- FRONTEND ----------

frontend-shell:
	docker compose exec $(FRONTEND_SERVICE) sh

frontend-install:
	cd frontend && npm install

frontend-dev:
	cd frontend && npm run dev

frontend-build:
	cd frontend && npm run build


# ---------- CLEANUP ----------

clean:
	docker compose down -v
	docker system prune -f


# ---------- HELP ----------
help:
	@echo "Available commands:"
	@echo "  make run              - start full stack"
	@echo "  make stop             - stop containers"
	@echo "  make logs             - show logs"
	@echo "  make migrate          - run DB migrations"
	@echo "  make migration name=  - create migration"
	@echo "  make generate-client  - generate OpenAPI client"
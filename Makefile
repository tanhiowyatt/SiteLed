.DEFAULT_GOAL := help

.PHONY: help install dev build start lint clean

# Homebrew keeps versioned Node.js formulas keg-only on macOS.
NODE_PREFIX := $(shell brew --prefix node@22 2>/dev/null)
ifneq ($(strip $(NODE_PREFIX)),)
export PATH := $(NODE_PREFIX)/bin:$(PATH)
endif

help:
	@echo "Available commands:"
	@echo "  make install      Install locked dependencies"
	@echo "  make dev          Start the development server"
	@echo "  make build        Build the production site"
	@echo "  make start        Serve the static production export"
	@echo "  make lint         Run ESLint"
	@echo "  make clean        Remove dependencies and generated files"

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

start: build
	npm start

lint:
	npm run lint

clean:
	rm -rf node_modules .next dist out coverage
	rm -f next-env.d.ts tsconfig.tsbuildinfo

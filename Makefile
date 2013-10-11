BIN = ./node_modules/.bin/

test:
	@${BIN}mocha --reporter spec

.PHONY: test
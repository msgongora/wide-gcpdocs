
all: chrome

chrome:
	@mkdir -p build && \
	zip build/wide-gcpdocs.zip LICENSE manifest.json background.js \
		wide-gcpdocs.css wide-gcpdocs-toggle.js \
		icons/icon.png icons/icon-disabled.png \
		icons/icon32.png icons/icon48.png icons/icon128.png

clean:
	@rm -fr build


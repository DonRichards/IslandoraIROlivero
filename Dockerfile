FROM node:14.17.1 as build
ARG BUILD_CONTEXT

CMD ["bash", "-c", "yarn install && npx browserslist@latest --update-db"]

# Run to build the theme
# docker build -t islandorairolivero .
# docker run --rm -v $(pwd):/usr/src/project islandorairolivero bash -c "yarn run build:js"

# Commands that can be passed
# yarn run watch:js
# yarn run build:js
# yarn run watch:js-dev
# yarn run build:js -- --file js/responsive-details.es6.js
# yarn build:css Process sources without writing source maps.
# yarn build:css-dev Process sources with (external) source maps.
# yarn watch:css Watches source assets and applies distributive task if any of them changes.
# yarn watch:css-dev Watches source assets and applies development task if any of them changes.

RUN mkdir -p /usr/src/project
WORKDIR /usr/src/project
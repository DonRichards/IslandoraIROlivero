# Olivero Theme
A clean, modern, and accessible Drupal default theme.

We’re proposing a new design for the default theme for Drupal. This will not be a replacement for Olivero, but a brand new theme that will hopefully come packaged in Drupal 9.1. The new theme will have a modern feel based on the style adjectives and principles that were identified during the design process with the main stakeholders. The intention is to create a theme that is WCAG AA compliant, supports updated functionality in Drupal and will have a timeless design that will still feel modern several years from now. We’re proposing the name  the theme Oliverio after Rachel Olivero who was an advocate for accessibility and Drupal community member.

## Pre-requisites
Before starting, ensure that you are using at least the latest LTS release of
Node.js, once Node.js has been installed, we recommend to install yarn
```
npm i -g yarn
```

To install the required packages use
```
yarn install
```

## Working on Javascript
When developing JavaScript locally you can use the watcher to make changes and
have them compiled as you save as well as generate source maps.

```
yarn run watch:js
```

It is also possible to build all files at once

```
yarn run build:js
```

To build source maps you need to use

```
yarn run watch:js-dev
```

For building a single file use

```
yarn run build:js -- --file js/responsive-details.es6.js
```

## Working on CSS
The project uses [PostCSS](https://postcss.org/) for managing variables and
provide the needed browser support. CSS scaffolding tasks are following the
logic of the js tasks:

  * `yarn build:css`
    Process sources without writing source maps.
  * `yarn build:css-dev`
    Process sources with (external) source maps.
  * `yarn watch:css`
    Watches source assets and applies distributive task if any of them changes.
  * `yarn watch:css-dev`
    Watches source assets and applies development task if any of them changes.

## Linting js and css
For linting compiled CSS use
```
yarn run lint:css
```

For js there are two separate configs you can use
```
yarn run lint:js

yarn run lint:js-passing
```

To fix all linting errors and warnings you can use
```
yarn run lint-fix
```

## Using the Dockerfile (alternative to the above options)
Run to build the theme
`docker build -t islandorairolivero .`

Commands that can be passed as part of the `docker run` command. 
 - `yarn run watch:js`
 - `yarn run build:js`
 - `yarn run watch:js-dev`
 - `yarn run build:js -- --file js/responsive-details.es6.js`
 - `yarn build:css Process sources without writing source maps.`
 - `yarn build:css-dev Process sources with (external) source maps.`
 - `yarn watch:css Watches source assets and applies distributive task if any of them changes.`
 - `yarn watch:css-dev Watches source assets and applies development task if any of them changes.`

### Command Breakdown:
Example: `docker run --rm -v $(pwd):/usr/src/project islandorairolivero bash -c "yarn run build:js"`

`docker run`
This command is used to start a new container from a Docker image.

`--rm`
This flag ensures that the Docker container is automatically removed after it exits. This is helpful for one-off commands, ensuring that you don't accumulate stopped containers.

`-v $(pwd):/usr/src/project`
This flag mounts a volume. Specifically:

`$(pwd)`: This is a shell command that returns the current working directory.
`/usr/src/project`: This is the path inside the Docker container where the current directory will be mounted.
Together, `-v $(pwd):/usr/src/project` means "mount the current directory to /usr/src/project inside the container". This allows the container to access the files in the current directory.
`islandorairolivero`
This is the name of the Docker image that the container will be started from.

`bash -c "yarn run build:js"`
This is the command that will be executed inside the Docker container once it starts:

`bash`: This invokes the Bash shell.
`-c`: This flag allows you to pass a command as a string to Bash.
`"yarn run build:js"`: This is the command string that will be executed. It runs the build:js script defined in the project's package.json using Yarn.

#### What Does This Command Do?
When you run this command, Docker will:
1. Start a new container from the islandorairolivero image.
1. Mount the current directory to /usr/src/project inside the container.
1. Run the yarn run build:js command inside the container to build the JavaScript files for the project.
1. Remove the container once the command finishes executing.
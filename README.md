# Islandora IR Theme (Oliverio Fork)
A modern, WCAG AA compliant theme for Islandora, specifically tailored for Institutional Repositories (IR). Derived from the Drupal theme "Oliverio" — inspired by the legacy of Rachel Olivero, a passionate advocate for accessibility and an esteemed Drupal community member. This theme provides essential twig templates for a seamless integration with Islandora IR instances, offering a timeless design to empower institutions in presenting their content elegantly and efficiently.

## Pre-requisites
Before starting, ensure that you are using at least the latest LTS release of Node.js, once Node.js has been installed, we recommend to install yarn
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

## Using the Dockerfile 

*(An alternative to the other setup options)*

To build the theme, execute the following command:

```bash
docker build -t islandorairolivero .
```

### Docker Run Commands

Here are the commands that can be passed as part of the `docker run`:

- `yarn run watch:js`
- `yarn run build:js`
- `yarn run watch:js-dev`
- `yarn run build:js -- --file js/responsive-details.es6.js`
- `yarn build:css` - Process sources without writing source maps.
- `yarn build:css-dev` - Process sources with (external) source maps.
- `yarn watch:css` - Watches source assets and applies distributive tasks if any of them change.
- `yarn watch:css-dev` - Watches source assets and applies development tasks if any of them change.

### Command Breakdown

Consider the example:

```bash
docker run --rm -v $(pwd):/usr/src/project islandorairolivero bash -c "yarn run build:js"
```

- `docker run` - Starts a new container from a Docker image.
  
- `--rm` - Ensures the Docker container is automatically removed after it exits.

- `-v $(pwd):/usr/src/project` - Mounts a volume.
  - `$(pwd)` - A shell command returning the current working directory.
  - `/usr/src/project` - Path inside the Docker container where the current directory is mounted.
  - Together, this means "mount the current directory to `/usr/src/project` inside the container."

- `islandorairolivero` - The name of the Docker image from which the container starts.

- `bash -c "yarn run build:js"` - Command executed inside the Docker container.
  - `bash` - Invokes the Bash shell.
  - `-c` - Allows passing a command as a string to Bash.
  - `"yarn run build:js"` - Runs the `build:js` script defined in the project's `package.json` using Yarn.

#### What Does This Command Do?

Executing the command will:
1. Start a new container from the `islandorairolivero` image.
2. Mount the current directory to `/usr/src/project` inside the container.
3. Run the `yarn run build:js` command inside the container.
4. Remove the container after command execution.

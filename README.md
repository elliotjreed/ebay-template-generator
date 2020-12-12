# eBay HTML Template Generator

## Installing Yarn

For instructions on how to install Yarn visit [yarnpkg.com](https://yarnpkg.com/lang/en/).

## Installing dependencies

The frontend uses Typescript and SASS, and is bundled using Webpack.

To install the required dependencies run:

```
yarn install
```

## Running for development

To run the Webpack development server run:

```
yarn start
```

## Building for production

To build the production-optimised application run:

```
yarn build
```

### Building Docker image

An example script for building a Docker image is included in the scripts section of the [package.json](package.json) file.

After editing the values in there, run the following to build the Docker image and push to DockerHub:

```
yarn docker
```

## Deployment Example

An example [docker-compose.yml](docker-compose.yml) is included which works with [https://traefik.io/traefik/](Traefik) reverse proxy (version 1.7);

## Built With

- [Typescript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Webpack](https://webpack.js.org/)
- [Bulma CSS](https://bulma.io/)

## License

This project is licensed under the MIT License - see the [LICENCE](LICENSE) file for details.

# POYO: Client Web

[![Test](https://github.com/poyo-fc/poyo-client-web/actions/workflows/test.yml/badge.svg)](https://github.com/poyo-fc/poyo-client-web/actions/workflows/test.yml)
[![Build](https://github.com/poyo-fc/poyo-client-web/actions/workflows/build.yml/badge.svg)](https://github.com/poyo-fc/poyo-client-web/actions/workflows/build.yml)

This is the client app for POYO's official website. The site is built with [VitePress](https://vitepress.vuejs.org/). If you're not familier with it, please reffer to the VitePress docs.

## Getting Started

Install dependencies via Yarn and boot up the dev server with `yarn serve` command.

```bash
$ yarn install
$ yarn serve
```

Now you can access the application at http://localhost:3000.

## Commands

Here're the essential NPM script commands that you can use.

```bash
# Boot up dev server on http://localhost:3000. You may pass `--port` option
# to change the port. e.g. `yarn serve --port 8080`
$ yarn serve

# Build the app for production. The new `dist` folder will be created under
# `src/.vitepress/dist` which contains all the assets.
$ yarn build

# Boot up teh local server and serve assets udner `dist` folder created via
# `yarn build` command. This is a great way to test production build on your
# local environment.
$ yarn start

# Run type check.
$ yarn type

# Run linter. This command will also fix any format error detected by eslint.
# You may use `yarn lint:fail` to not run format and throw error instead.
$ yarn lint

# Run both `yarn type` and `yarn lint`. You may use `yarn test:fail` to run
# `yarn lint:fail` instead within this command.
$ yarn test
```

## Deployment

The site is deployed by [Netlify](https://www.netlify.com/) whenever the code gets pushed to the `main` branch. If you don't want the code to go production, remember to create a PR first. Netlify offers a preview mode when creating PR, so you can always test out your in progress work.

## Contribution

We're really excited that you are interested in contributing to the project. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

### Code style guide

We follow official [Vue Style Guide](https://vuejs.org/style-guide/). But always remember to follow the "Golden Rule" below.

> Every line of code should appear to be written by a single person, no matter the number of contributors.
> &mdash; <cite>@mdo</cite>

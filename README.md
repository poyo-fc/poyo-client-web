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

## Deployment

The site is deployed by [Netlify](https://www.netlify.com/) whenever the code gets pushed to the `main` branch. If you don't want the code to go production, remember to create a PR first. Netlify offers a preview mode when creating PR, so you can always test out your in progress work.

## Contribution

We're really excited that you are interested in contributing to the project. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

### Code style guide

Sefirot follows official [Vue Style Guide](https://v3.vuejs.org/style-guide/). But always remember to follow the "Golden Rule" below.

> Every line of code should appear to be written by a single person, no matter the number of contributors.
> &mdash; <cite>@mdo</cite>

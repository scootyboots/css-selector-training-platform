# CSS Selector Training Platform

## Description

Have you or anybody else found that learning about CSS selectors to be difficult? Well here's an interactive app that can teach you the basics and cheer you on in your journey to!
 learning about CSS selectors!
 
[css-training](https://user-images.githubusercontent.com/6701630/163525037-7455e453-828d-4863-bed6-76a3200365c9.gif)

### Installation

To install this project and run in development, run the following commands:

```
$ git clone https://github.com/scootyboots/css-selector-training-platform.git
$ cd css-selector-training-platform
$ npm install
$ npm run dev
```

### Stack

Vue 3 + Typescript + Vite

This app was developed with Vue 3 and Typescript in Vite. The app uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

# CSS Selector Training Platform

## Description
This app was developed as an easily customizable app for training one's abilities with CSS selectors.

Here's a demonstration of how the app can be utilized: https://scootyboots.github.io/css-selector-training-platform/example-exercise/single
 
![css-training2](https://user-images.githubusercontent.com/6701630/163525330-d3019303-2908-4572-8bc0-fc79c419ed0f.gif)

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

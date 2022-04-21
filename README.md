# dog-vue

A simple PWA that shows a dog with a list of breed that you choose and change the image.

Nothing more, nothing less.

Filled with documentation and explanations.

Anyway, it uses a pseudo MVC, because at the end there's no model here at all.

The idea is that we have a controller and several dummy views. The controller is responsible of all the logic (or at least mostly) and send and receive events from their children components. So it's the responsible of the coordination. At the end is a simple pattern.

Test are included.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

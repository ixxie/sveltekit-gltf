# Using vite-plugin-gltf with SvelteKit

This is a minimal reproduction of an issue trying to use [vite-plugin-gltf](https://github.com/nytimes/rd-bundler-3d-plugins) in a SvelteKit project. [Threlte](https://threlte.xyz/) is used for attempting to render the model.

See `src/lib/Test.svelte` for the main test file. The `.glb` asset is stored in `src/lib/assets/pineapple.glb` (credit: [Lassi Kaukonen](https://sketchfab.com/thesidekick)).

## the problem

Running the dev server, we see the following error:

```
ReferenceError: location is not defined
    at /src/lib/assets/pineapple.glb:1:70
    at instantiateModule (file:///home/ixxie/repos/sveltekit-gltf/node_modules/vite/dist/node/chunks/dep-3007b26d.js:52400:15)
```

## the solution

It seems disabling SSR solved this issue:

```js
// +page.js/ts
export const ssr = false;
```

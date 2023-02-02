import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

import gltf from 'vite-plugin-gltf';
import { dedup, draco, prune, textureResize } from '@gltf-transform/functions';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		gltf({
			verbose: true,
			transforms: [
				// remove unused resources
				prune(),
				// combine duplicated resources
				dedup(),
				// keep textures under 2048x2048
				textureResize({ size: [128, 128] }),
				// compress mesh geometry
				draco()
			]
		})
	],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
};

export default config;

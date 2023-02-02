<script>
	import { Canvas, AmbientLight, OrbitControls, PerspectiveCamera } from '@threlte/core';
	import { GLTF } from '@threlte/extras';

	import url from './assets/pineapple.glb';
</script>

<div>
	<Canvas>
		<PerspectiveCamera position={{ x: 5, y: 2, z: 5 }} fov={25}>
			<OrbitControls autoRotate enableDamping />
		</PerspectiveCamera>
		<AmbientLight />
		<GLTF {url} useDraco position={{ x: 0, y: -0.7, z: 0 }} scale={0.5} />
	</Canvas>
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>

<template>
    <div class="hexagon" ref="hexagonRef"></div>
</template>

<script lang="ts" setup>
import * as THREE from 'three';
import { onMounted, Ref, ref } from 'vue';

const hexagonRef: Ref<Element | undefined> = ref<Element>();

onMounted(async () => {
    if (hexagonRef.value) {
        const width = 1000;
        const height = 500;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        hexagonRef.value.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();
    }
});
</script>

<style lang="scss" scoped></style>

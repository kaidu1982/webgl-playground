<template>
    <div class="canvas-wrapper">
        <canvas ref="bjsCanvas" />
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createScene } from '@/pages/Scene';

const bjsCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
    if (bjsCanvas.value) {
        createScene(bjsCanvas.value);
    }
});
</script>

<style scoped lang="scss"></style>

<template>
    <div class="sidebar">
        <h2>Example</h2>
        <div class="menu" @click="routerPush('BoxExample')">BoxExample</div>
        <div class="menu" @click="routerPush('Hexagon')">Hexagon</div>
    </div>
</template>

<script lang="ts" setup>
import { routerPush } from '@/router.js';
</script>

<style lang="scss" scoped>
.sidebar {
    width: 300px;
    height: 100vh;
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid #e8e8e8;
    h2 {
        margin: 16px 0;
        color: #049ef4;
    }

    div.menu {
        margin: 4px 0;
        cursor: pointer;
        &:hover {
            color: #049ef4;
        }
    }
}
</style>

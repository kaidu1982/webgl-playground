<template>
  <div class="box-example">
    <Renderer>
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <Box>
          <LambertMaterial />
        </Box>
      </Scene>
    </Renderer>
  </div>

</template>

<script lang="ts" setup>
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs';
</script>

<style lang="scss" scoped>
.box-example {

    width: 1000px;
  height: 500px;
}
</style>

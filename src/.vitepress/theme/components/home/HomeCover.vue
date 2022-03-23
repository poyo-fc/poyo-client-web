<script setup lang="ts">
import { ref } from 'vue'

// TODO: Add carousell feature.

const current = ref(0)

const images = [
  '/img/cover/poyo-tozan-001.jpg',
  '/img/cover/poyo-reishiki-001.jpg',
  '/img/cover/poyo-tozan-002.jpg'
]
</script>

<template>
  <PMount class="HomeCover">
    <div class="container">
      <img class="img" :src="images[current]">
    </div>
  </PMount>
</template>

<style scoped lang="postcss">
.HomeCover {
  @media (min-width: 1024px) {
    padding: 0 64px;
  }
}

.HomeCover.mount-active .container {
  transition: opacity 1s 2.25s;
}

.HomeCover.mount-from .container {
  opacity: 0;
}

/*
 * TODO: We should trigger this animation on every image change when we
 * add carousell feature to this cover component.
 */
.HomeCover.mount-from .img {
  transform: scale(1.2);
}

.container {
  overflow: hidden;

  @media (min-width: 1024px) {
    margin: 0 auto;
    border-radius: 8px;
    max-width: 1152px;
  }
}

.img {
  width: 100%;
  height: 256px;
  object-fit: cover;
  transition: transform 60s;

  @media (min-width: 592px) {
    height: auto;
  }
}
</style>

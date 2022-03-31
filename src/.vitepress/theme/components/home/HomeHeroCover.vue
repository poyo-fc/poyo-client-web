<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import { load } from '/@theme/support/Image'
import IconChevronLeft from '../icons/IconChevronLeft.vue'
import IconChevronRight from '../icons/IconChevronRight.vue'

const { theme } = useData()

const images = theme.value.home.covers

const max = images.length - 1
const current = ref(0)
const animation = ref(true)

onMounted(() => {
  load(images)

  setTimeout(() => { animation.value = false }, 3000)
})

function prev() {
  transition(() => {
    current.value = current.value <= 0 ? max : current.value - 1
  })
}

function next() {
  transition(() => {
    current.value = current.value >= max ? 0 : current.value + 1
  })
}

function transition(fn: () => void) {
  animation.value = true

  fn()

  setTimeout(() => { animation.value = false }, 250)
}
</script>

<template>
  <PMount class="HomeHeroCover">
    <div class="container">
      <transition name="fade">
        <div class="holder" :key="images[current]">
          <img class="img" :class="{ zoom: animation }" :src="images[current]">
        </div>
      </transition>
    </div>

    <div class="control">
      <button class="control-btn prev" @click="prev">
        <IconChevronLeft class="control-icon" />
      </button>
      <button class="control-btn next" @click="next">
        <IconChevronRight class="control-icon" />
      </button>
    </div>
  </PMount>
</template>

<style scoped lang="postcss">
.HomeHeroCover {
  @media (min-width: 1024px) {
    padding: 0 64px;
  }
}

.HomeHeroCover.mount-active .container { transition: opacity 1s 2.25s; }
.HomeHeroCover.mount-active .control   { transition: opacity .75s 2.5s, transform .75s 2.5s; }

.HomeHeroCover.mount-from .container {
  opacity: 0;
}

.HomeHeroCover.mount-from .control {
  opacity: 0;
  transform: translateY(4px);
}

.container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 256px;
  overflow: hidden;

  @media (min-width: 1024px) {
    margin: 0 auto;
    border-radius: 8px;
    padding-bottom: 42.19%;
    max-width: 1152px;
    height: auto;
  }
}

.holder {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 1s, filter 1s;
}

.holder.fade-enter-from,
.holder.fade-leave-to {
  opacity: 0;
  filter: blur(24px);
}

.img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 45s;
}

.img.zoom {
  transform: scale(1.2)
}

.control {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  margin-top: -24px;
}

.control-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 48px;
  height: 48px;
  color: var(--c-text-light-2);
  background-color: var(--c-white);
  transition: color .25s, background-color .1s;

  &:hover {
    color: var(--c-brand);
  }

  &:active {
    background-color: var(--c-gray-light-4);
  }
}

.control-btn + .control-btn {
  margin-left: 4px;
}

.control-btn.prev .control-icon { transform: translateX(-1px); }
.control-btn.next .control-icon { transform: translateX(1px); }

.control-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>

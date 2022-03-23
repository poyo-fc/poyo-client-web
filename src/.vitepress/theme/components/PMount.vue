<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps({
  tag: { type: String, default: 'div' }
})

defineEmits(['click'])

const mount = ref(true)

onMounted(() => {
  setTimeout(() => { mount.value = false }, 100)
})
</script>

<template>
  <component
    :is="tag"
    class="PMount mount-active"
    :class="{ 'mount-from': mount }"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

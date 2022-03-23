<script setup lang="ts">
defineProps({
  tag: { type: String, default: 'div' }
})
</script>

<template>
  <PMount :is="tag" class="PPage">
    <slot />
  </PMount>
</template>

<style scoped lang="postcss">
.PPage {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 72px - 144px);

  @media (min-width: 768px) {
    min-height: calc(100vh - 96px - 176px);
  }
}
</style>

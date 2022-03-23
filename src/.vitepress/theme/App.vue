<script setup lang="ts">
import PGlobalHeader from './components/PGlobalHeader.vue'
import PGlobalFooter from './components/PGlobalFooter.vue'
</script>

<template>
  <div class="PApp">
    <PGlobalHeader />

    <div class="main">
      <Content />
    </div>

    <PGlobalFooter />
  </div>
</template>

<style scoped lang="postcss">
.PApp {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>

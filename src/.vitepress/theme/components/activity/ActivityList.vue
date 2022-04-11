<script setup lang="ts">
import { useActivityCollection } from '/@theme/composables/Activity'
import ActivityListItem from './ActivityListItem.vue'

const { data } = useActivityCollection()
</script>

<template>
  <PMount tag="section" class="ActivityList">
    <div class="wrapper">
      <div class="container">
        <div class="items">
          <div v-for="(activity, index) in data" :key="index" class="item">
            <ActivityListItem :activity="activity" />
          </div>
        </div>
      </div>
    </div>
  </PMount>
</template>

<style scoped lang="postcss">
.ActivityList {
  @media (min-width: 592px) {
    padding: 0 32px;
  }

  @media (min-width: 768px) {
    padding: 32px 32px 0;
  }
}

.ActivityList.mount-active {
  transition: opacity .75s, transform .75s;
  transition-delay: .25s;
}

.ActivityList.mount-from {
  opacity: 0;
  transform: translateY(8px);
}

.wrapper {
  margin: 0 auto;
  max-width: 960px;
}

.container {
  overflow: hidden;
}

.items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -12px;
}

.item {
  display: flex;
  padding: 12px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
}
</style>

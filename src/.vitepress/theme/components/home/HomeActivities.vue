<script setup lang="ts">
import { useData } from 'vitepress'
import Activity from '/@theme/models/Activity'
import HomeActivitiesItem from './HomeActivitiesItem.vue'

const { theme } = useData()

const activities = theme.value.activities.data.map((data: any) => {
  return new Activity(data)
})
</script>

<template>
  <PMount tag="section" class="HomeActivities">
    <div class="header">
      <div class="line" />
      <h2 class="title">Latest activities</h2>
    </div>

    <div class="items">
      <div v-for="(activity, index) in activities" :key="index" class="item">
        <HomeActivitiesItem :activity="activity" />
      </div>
    </div>
  </PMount>
</template>

<style scoped lang="postcss">
.HomeActivities {
  padding: 0 0 128px;
  border-bottom: 1px solid var(--c-divider-light);
}

.header {
  padding: 0 24px;
}

.line {
  width: 96px;
  height: 2px;
  background-color: var(--c-brand);
}

.title {
  padding-top: 12px;
  line-height: 32px;
  font-size: 24px;
  font-weight: 500;
}
</style>

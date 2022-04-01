<script setup lang="ts">
import { useActivityCollection } from '/@theme/composables/Activity'
import HomeActivitiesItem from './HomeActivitiesItem.vue'

const { data } = useActivityCollection()
</script>

<template>
  <PMount tag="section" class="HomeActivities">
    <div class="wrapper">
      <div class="header">
        <div class="line" />
        <h2 class="title">Latest activities</h2>
      </div>

      <div class="containers">
        <div class="items">
          <div v-for="(activity, index) in data" :key="index" class="item">
            <HomeActivitiesItem :activity="activity" />
          </div>
        </div>
      </div>
    </div>
  </PMount>
</template>

<style scoped lang="postcss">
.HomeActivities {
  padding: 0 0 128px;
  border-bottom: 1px solid var(--c-divider-light);

  @media (min-width: 592px) {
    padding: 0 32px 128px;
  }

  @media (min-width: 768px) {
    padding: 32px 32px 128px;
  }
}

.HomeActivities.mount-active {
  transition: opacity .75s, transform .75s;
  transition-delay: 1.5s;
}

.HomeActivities.mount-from {
  opacity: 0;
  transform: translateY(8px);
}

.header {
  padding: 0 24px;

  @media (min-width: 592px) {
    padding: 0;
  }
}

.wrapper {
  margin: 0 auto;
  max-width: 960px;
}

.line {
  width: 96px;
  height: 2px;
  background-color: var(--c-brand);
}

.title {
  padding-top: 12px;
  letter-spacing: 1px;
  line-height: 32px;
  font-size: 24px;
  font-weight: 700;

  @media (min-width: 592px) {
    padding-top: 20px;
    font-size: 32px;
  }
}

.containers {
  padding-top: 24px;
  overflow: hidden;

  @media (min-width: 592px) {
    padding-top: 32px;
  }
}

.items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -8px;

  @media (min-width: 592px) {
    margin: -12px;
  }
}

.item {
  display: flex;
  padding: 8px;
  width: 100%;

  @media (min-width: 592px) {
    padding: 12px;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
}
</style>

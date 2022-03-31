<script setup lang="ts">
import { PropType } from 'vue'
import Activity from '/@theme/models/Activity'

defineProps({
  activity: { type: Object as PropType<Activity>, required: true }
})
</script>

<template>
  <article class="HomeActivitiesItem">
    {{ activity.title }}
  </article>
</template>

<style scoped lang="postcss">
.HomeActivitiesItem {

}
</style>

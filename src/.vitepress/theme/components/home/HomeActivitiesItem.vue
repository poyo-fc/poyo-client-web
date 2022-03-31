<script setup lang="ts">
import { PropType } from 'vue'
import Activity from '/@theme/models/Activity'

const props = defineProps({
  activity: { type: Object as PropType<Activity>, required: true }
})

const [typeEn, typeJa] = props.activity.getTypeValue()
</script>

<template>
  <article class="HomeActivitiesItem">
    <div class="header">
      <p class="type">
        <span class="type-text">{{ typeEn }}</span>
        <span class="type-divider" />
        <span class="type-text">{{ typeJa }}</span>
      </p>
    </div>

    <div class="content">
      <h1 class="title">{{ activity.content }}</h1>
      <p class="lead">{{ activity.lead }}</p>

      <p class="duration">
        {{ activity.startAsDay.format('YYYY / MM / DD') }}
        <span class="duration-divider">–</span>
        {{ activity.endAsDay?.format('YYYY / MM / DD') ?? 'In progress' }}
      </p>
    </div>

    <div class="footer">
      <div class="members">
        <p v-for="member in activity.members" :key="member.id" class="member">
          {{ member.name }}
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped lang="postcss">
.HomeActivitiesItem {
  border-top: 1px solid var(--c-divider-light);
  border-bottom: 1px solid var(--c-divider-light);
  width: 100%;
  background-color: var(--c-black-deep);

  @media (min-width: 592px) {
    border: 1px solid var(--c-divider-light);
    border-radius: 8px;
  }
}

.header {
  padding: 24px 24px 0;

  @media (min-width: 1024px) {
    padding: 32px 32px 0;
  }
}

.type {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--c-text-2);
}

.type-text {
  letter-spacing: 1.2px;
}

.type-divider {
  display: inline-block;
  margin: 0 12px;
  width: 1px;
  height: 16px;
  background-color: var(--c-text-3);
}

.content {
  padding: 16px 24px 16px;

  @media (min-width: 1024px) {
    padding: 24px 32px 16px;
  }
}

.title {
  font-size: 20px;
  font-weight: 700;
}

.lead {
  padding-top: 8px;
  font-size: 16px;
  font-weight: 700;
  color: var(--c-text-2);
}

.duration {
  padding-top: 20px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--c-text-2);

  @media (min-width: 1024px) {
    padding-top: 32px;
  }
}

.duration-divider {
  display: inline-block;
  margin: 0 6px;
}

.footer {
  border-top: 1px solid var(--c-divider-light);
  padding: 16px 24px;

  @media (min-width: 1024px) {
    padding: 16px 32px;
  }
}

.members {
  display: flex;
  flex-wrap: wrap;
}

.member {
  line-height: 28px;
  font-size: 14px;
  font-weight: 500;
  color: var(--c-text-2);
}

.member::after {
  display: inline-block;
  margin: 0 8px;
  content: "/";
  color: var(--c-text-3);
}

.member:last-child::after {
  display: none;
}
</style>

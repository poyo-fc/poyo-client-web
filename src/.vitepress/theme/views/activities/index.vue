<script setup lang="ts">
import ActivityList from '/@theme/components/activity/ActivityList.vue'
</script>

<template>
  <PPage class="Activities">
    <div class="header">
      <h1 class="title">
        READY<br>SET<br><span class="brand">ACTION</span>
      </h1>

      <p class="lead">
      POYOでは、日々たくさんの活動が行われて<wbr><span class="nowrap">います。</span><wbr><span class="nowrap">ここでは、</span><wbr><span class="nowrap">その中でも</span><wbr><span class="nowrap">特筆すべき</span><wbr><span class="nowrap">活動に</span><wbr><span class="nowrap">ついて</span><wbr><span class="nowrap">紹介します。</span></p>
    </div>

    <div class="list">
      <ActivityList />
    </div>
  </PPage>
</template>

<style scoped lang="postcss">
.Activities {
  padding: 0 0 128px;
  border-bottom: 1px solid var(--c-divider-light);
}

.Activities.mount-active {
  .title { transition: opacity .75s, transform .75s; }
  .lead  { transition: opacity .75s .1s, transform .75s .1s; }
}

.Activities.mount-from {
  .title,
  .lead {
    opacity: 0;
    transform: translateY(8px);
  }
}

.header {
  padding: 16px 24px 12px;
}

.title {
  padding-top: 12px;
  letter-spacing: 1px;
  line-height: 64px;
  font-size: 64px;
  font-weight: 700;
  color: var(--c-text-1);

  @media (min-width: 592px) {
    padding-top: 20px;
    font-size: 32px;
  }
}

.brand {
  color: var(--c-brand);
}

.lead {
  padding-top: 16px;
  line-height: 28px;
  font-weight: 500;
  color: var(--c-text-2);
}

.list {
  padding-top: 16px;
}
</style>

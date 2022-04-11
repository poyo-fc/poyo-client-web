<script setup lang="ts">
import { useRouter } from 'vitepress'

const router = useRouter()

function isActive(path: string) {
  return router.route.path.startsWith(path)
}
</script>

<template>
  <header class="PGlobalHeader">
    <PMount class="logo">
      <a class="logo-link" href="/">
        <img class="logo-img" src="/img/logo-poyo.png" alt="POYO">
      </a>
    </PMount>

    <PMount tag="nav" class="menu">
      <div class="item">
        <a class="link" :class="{ active: isActive('/activities/') }" href="/activities/">
          Activities
        </a>
      </div>
    </PMount>
  </header>
</template>

<style scoped lang="postcss">
.PGlobalHeader {
  position: sticky;
  top: 0;
  left: 0;
  z-index: var(--z-index-header);
  display: flex;
  align-items: center;
  padding: 9px 8px;
  -webkit-backdrop-filter: saturate(60%) blur(24px);
  backdrop-filter: saturate(60%) blur(24px);

  @media (min-width: 768px) {
    padding: 12px 16px;
  }
}

.logo.mount-active {
  transition: opacity 1s, filter 1s;
}

.logo.mount-from {
  opacity: 0;
  filter: blur(32px);
}

.logo-link {
  display: block;
  width: 96px;
  height: 54px;
  transition: opacity .25s;

  &:hover {
    opacity: .5;
  }

  @media (min-width: 768px) {
    width: 128px;
    height: 72px;
  }
}

.menu {
  transform: translateY(1px);
  transition: opacity 1s .25s, filter 1s .25s;
}

.menu.mount-from {
  opacity: 0;
  filter: blur(32px);
}

.item {
  padding-left: 16px;
}

.link {
  font-size: 14px;
  font-weight: 500;
  color: var(--c-text-2);
  transition: color .25s;

  &:hover,
  &.active {
    color: var(--c-brand);
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
}
</style>

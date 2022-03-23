<template>
  <header class="PGlobalHeader">
    <PMount class="logo">
      <a class="logo-link" href="/">
        <img class="logo-img" src="/img/logo-poyo.png" alt="POYO">
      </a>
    </PMount>
  </header>
</template>

<style scoped lang="postcss">
.PGlobalHeader {
  padding: 9px 8px;

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
</style>

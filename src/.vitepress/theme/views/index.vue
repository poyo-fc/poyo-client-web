<template>
  <PPage class="Home">
    <PMount class="title" tag="h1">
      <span class="brand first">ぼくたちは</span><span class="neutral">、</span><br><span class="brand second">ハードコア</span><span class="neutral">の血を流す。</span>
    </PMount>
  </PPage>
</template>

<style scoped lang="postcss">
.Home {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--c-divider-light);
}

.Home.mount-active {
  transition: border-color 1s;
  transition-delay: 3s;
}

.Home.mount-from {
  border-color: transparent;
}

.title {
  line-height: 40px;
  font-size: 28px;
  font-weight: 700;
  transform: translateY(-24px);

  @media (min-width: 768px) {
    line-height: 64px;
    font-size: 48px;
    transform: translateY(-40px);
  }
}

.title.mount-active .brand,
.title.mount-active .neutral {
  transition: opacity 3s, filter 3s, transform 3s;
}

.title.mount-active .brand.first  { transition-delay: .5s; }
.title.mount-active .brand.second { transition-delay: 1s; }
.title.mount-active .neutral      { transition-delay: 3.5s; }

.title.mount-from .brand {
  opacity: 0;
  filter: blur(32px);
  transform: scale(1.5);
}

.title.mount-from .neutral {
  opacity: 0;
}

.brand {
  display: inline-block;
  color: var(--c-brand);
}
</style>

<script setup lang="ts">
import HomeHeroCover from './HomeHeroCover.vue'
</script>

<template>
  <PMount class="HomeHero">
    <PMount class="title" tag="h1">
      <span class="brand first">YES</span><span class="neutral comma">,</span><br><span class="neutral"> WE ARE <br></span><span class="brand second">HARDCORE</span>
    </PMount>

    <PMount class="lead">
      <div class="lead-line" />
      <p class="lead-text">
        <span class="lead-block">FINAL FANTASY XIV</span>
        <span class="lead-slash">/</span>
        <span class="lead-block">ELEMENTAL UNICORN</span>
      </p>
    </PMount>

    <PMount class="slogan">
      <p class="slogan-text">
        <span class="nowrap">困難を克服し、</span><wbr><span class="nowrap">絶望を打ち壊し、</span><wbr><span class="nowrap">未踏の地を踏み締める。</span><br>
        <span class="nowrap">ぼくたちは、</span><wbr><span class="nowrap">ハードコアの血を流す。</span>
      </p>
    </PMount>

    <div class="cover">
      <HomeHeroCover />
    </div>
  </PMount>
</template>

<style scoped lang="postcss">
.HomeHero {
  padding: 16px 0 64px;

  @media (min-width: 592px) {
    padding-top: 64px;
  }

  @media (min-width: 768px) {
    padding-top: 48px;
  }

  @media (min-width: 1024px) {
    padding-top: 48px;
  }
}

.HomeHero.mount-active {
  transition: border-color 1s;
  transition-delay: 3s;
}

.HomeHero.mount-from {
  border-color: transparent;
}

.title {
  text-align: center;
  line-height: 44px;
  letter-spacing: 2px;
  font-size: 40px;
  font-weight: 700;

  @media (min-width: 592px) {
    br {
      display: none;
    }
  }

  @media (min-width: 768px) {
    line-height: 48px;
    font-size: 48px;
  }

  @media (min-width: 1024px) {
    line-height: 56px;
    font-size: 56px;
  }
}

.title.mount-active .brand.first  { transition: opacity 1s .25s, filter 1s .25s, transform .75s 1.5s; }
.title.mount-active .brand.second { transition: opacity 1s .75s, filter 1s .75s, transform .75s 1.5s; }
.title.mount-active .neutral      { transition: opacity .75s 1.5s, filter 1s 1.5s; }

.title.mount-from .brand,
.title.mount-from .neutral {
  opacity: 0;
  filter: blur(32px);
}

.title.mount-from .brand.first  { transform: translateY(20px); }
.title.mount-from .brand.second { transform: translateY(-20px); }
.title.mount-from .neutral      { opacity: 0; }

@media (min-width: 592px) {
  .title.mount-from .brand.first  { transform: translateX(88px); }
  .title.mount-from .brand.second { transform: translateX(-88px); }
}

@media (min-width: 768px) {
  .title.mount-from .brand.first  { transform: translateX(100px); }
  .title.mount-from .brand.second { transform: translateX(-100px); }
}

@media (min-width: 1024px) {
  .title.mount-from .brand.first  { transform: translateX(116px); }
  .title.mount-from .brand.second { transform: translateX(-116px); }
}

.brand {
  display: inline-block;
  color: var(--c-brand);
}

.neutral.comma {
  display: none;

  @media (min-width: 592px) {
    display: inline-block;
  }
}

.lead {
  position: relative;
  margin-top: 12px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 12px auto 0;
    width: 560px;
  }
}

.lead.mount-active .lead-text {
  transition: opacity 1.25s 1.25s, filter 1.25s 1.25s;
}

.lead.mount-active .lead-line {
  transition: opacity .5s 1.25s, transform .5s 1.25s;
}

.lead.mount-from .lead-text {
  opacity: 0;
  filter: blur(16px);
}

.lead.mount-from .lead-line {
  opacity: 0;
  transform: scaleX(0);
}

.lead-line {
  position: absolute;
  top: 24px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--c-divider);

  @media (min-width: 592px) {
    top: 12px;
  }
}

.lead-text {
  position: relative;
  display: inline-block;
  padding: 0 24px;
  text-align: center;
  line-height: 24px;
  letter-spacing: 1.5px;
  font-size: 16px;
  font-weight: 500;
  color: var(--c-text-2);
  background-color: var(--c-bg);

  @media (min-width: 592px) {
    display: inline-flex;
    padding: 0 16px;
    line-height: 24px;
    font-size: 20px;
  }
}

.lead-block {
  display: block;

  @media (min-width: 592px) {
    display: inline-block;
  }
}

.lead-slash {
  display: none;

  @media (min-width: 592px) {
    display: block;
    margin: 0 8px;
  }
}

.slogan {
  padding: 16px 32px 0;
  text-align: center;
  line-height: 28px;
  font-weight: 500;
  color: var(--c-text-2);

  @media (min-width: 592px) {
    padding-top: 24px;
  }

  @media (min-width: 1024px) {
    padding-top: 28px;
    line-height: 32px;
    font-size: 20px;
  }
}

.slogan.mount-active {
  transition: opacity 1s 1.75s, filter 1s 1.75s;
}

.slogan.mount-from {
  opacity: 0;
  filter: blur(16px);
}

.cover {
  padding: 32px 0 0;
  width: 100%;

  @media (min-width: 768px) {
    padding-top: 36px;
  }

  @media (min-width: 1024px) {
    padding-top: 36px;
  }
}
</style>

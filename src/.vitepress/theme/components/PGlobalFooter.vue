<template>
  <PMount class="PGlobalFooter" tag="footer">
    <p class="content">
      &copy; {{ new Date().getFullYear() }} POYO AND <PLink class="link" href="https://www.square-enix.com/">SQUARE ENIX CO, LTD.</PLink><br>
      <PLink class="link" href="https://jp.finalfantasyxiv.com/">FINAL FANTASY XIV</PLink> | FAN MADE WEBSITE<br>
      FREE COMPANY AT UNICORN IN ELEMENTAL<br>
      THIS SITE IS DEPLOYED BY <PLink class="link" href="https://www.netlify.com/">NETLIFY</PLink>
    </p>
  </PMount>
</template>

<style scoped lang="postcss">
.PGlobalFooter {
  padding: 32px 24px;

  @media (min-width: 768px) {
    padding: 40px 32px;
  }
}

.PGlobalFooter.mount-active {
  transition: opacity 1s;
  transition-delay: 3s;
}

.PGlobalFooter.mount-from {
  opacity: 0;
}

.content {
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--c-text-2);

  @media (min-width: 768px) {
    line-height: 24px;
    font-size: 14px;
  }
}

.link {
  transition: color .25s;

  &:hover {
    color: var(--c-brand);
  }
}
</style>

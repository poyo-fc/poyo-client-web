<template>
  <PMount class="PGlobalFooter" tag="footer">
    <p class="content">
      &copy; {{ new Date().getFullYear() }} POYO AND SQUARE ENIX CO, LTD.<br>
      FINAL FANTASY XIV | FAN MADE WEBSITE<br>
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
    font-weight: 400;
  }
}

.link {
  transition: color .25s;

  &:hover {
    color: var(--c-brand);
  }
}
</style>

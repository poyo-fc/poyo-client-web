<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  href: { type: String, required: true }
})

const OUTBOUND_REGEX = /^[a-z]+:/i

const isExternal = computed(() => OUTBOUND_REGEX.test(props.href))
const target = computed(() => isExternal.value ? '_blank' : undefined)
const rel = computed(() => isExternal.value ? 'noopener noreferrer' : undefined)
</script>

<template>
  <a
    class="SLink"
    :class="{ link: href }"
    :href="href"
    :to="href"
    :target="target"
    :rel="rel"
  >
    <slot />
  </a>
</template>

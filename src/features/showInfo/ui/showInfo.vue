<template>
  <h1>{{ info }}</h1>
</template>

<script setup lang="ts">
import { useDateStore } from '@/stores/date'
import { computed } from 'vue'
const dateStore = useDateStore()

const info = computed(() => {
  return dateStore.info
})
</script>

<style lang="scss" scoped></style>

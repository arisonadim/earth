<template>
  <div class="date-info">
    <showInfo />
    <getUserDate />
  </div>
</template>

<script setup lang="ts">
import { getUserDate, showInfo } from '@/features'
</script>

<style lang="scss" scoped>
.date-info {
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>

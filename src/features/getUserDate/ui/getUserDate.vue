<template>
  <div>
    <div v-if="!isLoading">
      <h1 class="title">Type in / select date</h1>
      <Input v-model="date" Ref="inputElement"/>
    </div>
    <Button @click="getDetails(date)" :loading="isLoading" :disabled="!date.length">{{
      dateInfo.length ? 'More' : 'Go!'
    }}</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Input } from '@/shared'
import { getUserDateApi } from '..';

const isLoading = ref(false)
const date = ref('')
const dateInfo = ref('')

const getDetails = async (e: string): Promise<void> => {
  isLoading.value = true;
  dateInfo.value = await getUserDateApi.getInfo(e)
  isLoading.value = false;
}
</script>

<style lang="scss" scoped></style>

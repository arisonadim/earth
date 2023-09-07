<template>
  <div class="user_date">
    <div class="user_date__form" v-if="!isLoading && !dateInfo.length">
      <h1 class="title">Type in / select date</h1>
      <Input v-model="date" />
    </div>
    <Button class="user_date__btn" @click="getDetails(date)" :loading="isLoading" :disabled="!date.length">{{
      dateInfo.length ? 'More' : 'Go!'
    }}</Button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button, Input } from '@/shared'
import { getUserDateApi } from '..'
import { useDateStore } from '@/stores/date'
const dateStore = useDateStore()

const isLoading = ref(false)
const date = ref('')
const dateInfo = computed(() => {
  return dateStore.info
})

const getDetails = async (e: string): Promise<void> => {
  isLoading.value = true
  if (!dateStore.infoArray.length) {
    const data = await getUserDateApi.getInfo(e)
    dateStore.setInfoArray(data ?? [])
  }
  dateStore.setRandomInfo()
  isLoading.value = false
}
</script>

<style lang="scss" scoped>
.user_date {
  margin-top: auto;
  padding-bottom: max(10rem, 10vh);

  &__form {
    margin-bottom: 5rem;
  }

  &__btn {
    margin-top: 2rem;
  }
}
</style>

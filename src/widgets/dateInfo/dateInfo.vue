<template>
  <div>
    <div v-if="dateInfo.length">
      <h1>{{ dateInfo }}</h1>
    </div>
    <div v-else-if="!isLoading">
      <h1 class="title">Type in / select date</h1>
      <Input v-model="date" />
    </div>
    <Button @click="getDetails(date)" :loading="isLoading" :disabled="!date.length">{{ dateInfo.length ? 'More' : 'Go!' }}</Button>
  </div>
</template>

<script setup lang="ts">
// defineProps(['dateInfo'])
import { ref } from 'vue'
import { getDateDetails } from '@/helpers/http'
// import {Input} from 'UI'
// import Button from '../shared/ui/Button/Button.vue'
import { Button, Input } from 'UI/index'


// import { useDateStore } from '@/stores/date'
// TODO button component
// TODO add button loading state
// TODO add animated ui/ux data fetching

const date = ref('')
const dateInfo = ref('')
const isLoading = ref(false)

const getDetails = async (e: string): Promise<any> => {
  isLoading.value = true;
  dateInfo.value = await getDateDetails(e)
  isLoading.value = false;
}
</script>

<style lang="scss" scoped>

</style>
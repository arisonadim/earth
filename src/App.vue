<script setup lang="ts">
import { ref } from 'vue'
import { getDateDetails } from '@/helpers/http'
import Input from 'Components/input.vue'
import Earth from '@/assets/images/mfdonte.png'
// import { useDateStore } from '@/stores/date'
// TODO button component

const date = ref('')
const dateInfo = ref('')

const getDetails = async (e: string): Promise<any> => {
  dateInfo.value = await getDateDetails(e)
}
</script>

<template>
  <div class="container">
    <div>
      <div class="planet__wrapper"><img :src="Earth" alt="Planet Earth" class="planet__img" /></div>
      <h1 v-if="dateInfo.length">{{ dateInfo }}</h1>
    </div>
    <div v-if="!dateInfo.length">
      <h1 class="title">Type in / select date</h1>
      <Input v-model="date" />
    </div>
    <button class="btn" @click="getDetails(date)">{{ dateInfo.length ? 'More' : 'Go!' }}</button>
  </div>
</template>

<style lang="scss">
.planet {
  &__wrapper {
    margin: 5rem auto;
    width: 30rem;
    height: 30rem;
  }
  &__img {
    height: 100%;
    width: auto;
  }
}
</style>

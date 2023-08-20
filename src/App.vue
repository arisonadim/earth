<script setup lang="ts">
import { ref } from 'vue'
import { getDateDetails } from '@/helpers/http'
import Input from 'Components/input.vue'
import Earth from '@/assets/images/mfdonte.png'
// import { useDateStore } from '@/stores/date'

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
      <h1 v-if="dateInfo.length">{{  dateInfo }}</h1>
    </div>
    <div>
      <h1 class="title">My first day on the Earth</h1>
      <!-- <p class="subline">Remember when you were young? You shone like the sun! ☀️</p> -->
      <p>Typein or select your Birthday and I'll show some facts about that day.</p>
      <Input v-model="date" />
      <button @click="getDetails(date)">Go!</button>
    </div>
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

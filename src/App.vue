<script setup lang="ts">
import { ref } from 'vue'
import { getDateDetails } from '@/helpers/http'
import Input from 'Components/input.vue'
import Earth from '@/assets/images/mfdonte.png'
// import { useDateStore } from '@/stores/date'
// TODO button component
// TODO add button loading state
// TODO add animated ui/ux data fetching

const date = ref('')
const dateInfo = ref('')

const getDetails = async (e: string): Promise<any> => {
  dateInfo.value = await getDateDetails(e)
}
</script>

<template>
  <div class="container">
    <div>
      <div class="planet__wrapper">
        <div class="moon__wrapper">
          <img :src="Earth" alt="" class="moon__img" />
        </div>
        <img :src="Earth" alt="Planet Earth" class="planet__img" />
      </div>

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
    position: relative;
  }
  &__img {
    height: 100%;
    width: auto;
  }
}

.moon {
  &__wrapper {
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: 50%;
    left: -20rem;
    transform: translateY(-50%);
    animation: 
      x-axis ease-in-out 4s infinite, 
      y-axis ease-in-out 4s infinite;
  }

  &__img {
    height: 100%;
    width: auto;
    animation:  z-axis ease-in-out 4s infinite;
  }
}

@keyframes x-axis {
  49% {
    z-index: 1;
  }

  50% {
    z-index: -1;
    left: 40rem;
  }

  99% {
    z-index: -1;
  }

  100% {
    z-index: 1;
    left: -20rem;
  }
}

@keyframes z-axis {
  25% {
    transform: scale(1.2);
  }

  73% {
    transform: scale(0.9);
  }
}

@keyframes y-axis {
  0% {
    transform: translateY(+5rem);
  }
  50% {
    transform: translateY(-5rem);
  }

  100% {
    transform: translateY(+5rem);
  }
}
</style>

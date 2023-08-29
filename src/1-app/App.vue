<script setup lang="ts">
import { ref } from 'vue'
import { getDateDetails } from '@/helpers/http'
import Input from 'UI/input.vue'
import Button from 'UI/button.vue'

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

<template>
  <div class="container">
    <div>
      <div class="planet__wrapper">
        <div class="moon__wrapper">
          <div class="moon__sattelite"></div>
        </div>
        <div class="planet__earth"></div>
        <div class="planet__text"></div>
      </div>
    </div>
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

<style lang="scss">
.planet {
  &__wrapper {
    margin: 5rem auto;
    position: relative;
  }
  &__earth {
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    background-image: url('/src/assets/images/landscape.png');
    box-shadow: inset -1.5rem -1.3rem 1rem rgba(0, 0, 0, 0.2);
    background-size: 45.4rem;
    transform: rotateZ(-7deg);
    background-repeat: repeat-x;
    animation: rotate linear 32s infinite;
  }

  &__text {
    position: absolute;
    top: -1rem;
    left: 0;
    width: 90%;
    height: 90%;
    content: '';
    background: url('/src/assets/images/text.png') center/contain no-repeat;
  }
}

.moon {
  &__wrapper {
    position: absolute;
    top: 50%;
    left: -20rem;
    transform: translateY(-50%);
    animation: x-axis ease-in-out 10s infinite, y-axis ease-in-out 10s infinite;
  }

  &__sattelite {
    width: 5rem;
    height: 5rem;
    box-shadow: inset -1.5rem -0.3rem 0.5rem rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    background: url('/src/assets/images/moon.png') center center/cover no-repeat;
    animation: z-axis ease-in-out 10s infinite;
  }
}

@keyframes x-axis {
  30% {
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
@keyframes rotate {
  to {
    background-position: -45.4rem 0;
  }
}
</style>

<script setup lang="ts">
defineProps(['disabled', 'loading'])
defineEmits(['click'])
</script>

<template>
  <button
    :disabled="disabled"
    class="btn"
    :class="{ 'btn--loading': loading }"
    @click="$emit('click')"
  >
    <div class="btn__loader" v-if="loading"></div>
    <slot v-else></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  min-width: 30rem;
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 5rem;
  font-family: 'Gochi Hand', cursive;
  font-size: 4rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &--loading {
    pointer-events: none;
  }

  &__loader {
    margin: 0 auto;
    width: 1em;
    height: 1em;
    border-radius: 1em;
    background-color: $main-font-color;
    animation: squeeze-please 1s linear infinite;
  }
}

@keyframes squeeze-please {
  0% {
    animation-timing-function: cubic-bezier(0.1685, 0.4459, 0.3641, 0.7833);
    transform: scale(0.5, 1);
  }

  50% {
    transform: scale(1, 0.5);
  }

  100% {
    transform: scale(0.5, 1);
  }
}
</style>

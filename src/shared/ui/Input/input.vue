<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: string
}
interface Emits {
  (event: 'update:modelValue', payload: string): void
}

const props = withDefaults(defineProps<Props>(), { modelValue: '' })
const emit = defineEmits<Emits>()

const value = computed({
  get(): string {
    return props.modelValue
  },
  set(value: string): void {
    const filteredValue = value.replace(/^0+(?=\d)/, '')
    emit('update:modelValue', filteredValue)
  },
})
// TODO validate
// TODO styles for input
</script>

<template>
  <div class="input">
    <input type="date" v-model="value" />
  </div>
</template>

<style lang="scss">
.input {
  input[type='date'] {
    background-color: #0080ff;
    padding: 2rem 4rem;
    font-family: 'Roboto Mono', monospace;
    color: #ffffff;
    font-size: 1.8rem;
    border: none;
    outline: none;
    border-radius: 5rem;
  }
  ::-webkit-calendar-picker-indicator {
    background-color: #ffffff;
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;
  }
}
</style>

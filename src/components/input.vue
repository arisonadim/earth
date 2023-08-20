<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
// TODO validate
// TODO styles for input
</script>

<template>
  <div class="input">
    <input type="date" v-model="value" />
  </div>
</template>

<style lang="scss"></style>

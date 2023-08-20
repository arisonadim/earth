import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', {
  state: () => {
    return { info: '' }
  },

  actions: {
    setDetails(data: string): void {
      this.info = data
    },
  },
})
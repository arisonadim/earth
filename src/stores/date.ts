import { defineStore } from 'pinia'
import type { Data } from '@/types'

export const useDateStore = defineStore('date', {
  state: () => {
    return { info: '' as string, infoArray: [] as Data[] }
  },

  actions: {
    setDetails(data: string): void {
      this.info = data
    },
    setInfoArray(data: Data[]): void {
      this.infoArray = data
    },
    setRandomInfo(): void {
      const arrSize: number = this.$state.infoArray.length
      if (!arrSize) return 
      const index: number = Math.floor(Math.random() * arrSize)
      const item: Data = this.$state.infoArray[index]
      const output: string = `In ${item.year}: ${item.text}`
      this.setDetails(output)
    }
  },
})

// communication with external APIs, backend API methods

import axios from 'axios'
import { apiUrl } from '@/const/path'
// import { useDateStore } from '@/stores/date'
// const dateInfo = useDateStore()

async function getInfo(e: string): Promise<any> {
  console.log('getDateDetails', e)
  try {
    const arr = e.split('-')
    if (arr.length < 3) return 'Error'
    const day = arr[2]
    const month = arr[1]
    const data = await axios.get(`${apiUrl}${month}/${day}`)
    console.log('data', data?.data.events)
    const arrSize: number = data?.data.events.length
    const index: number = Math.floor(Math.random() * arrSize)
    const item = data?.data.events[index]
    console.log("🚀 ~ file: http.ts:18 ~ getDateDetails ~ data?.data.events[index]:", data?.data.events[index])
    const output = `In ${item.year}: ${item.text}`
    // TODO refactoring needed
    // TODO split into simple functions
    // TODO keep fetched data in store. When pressed more — select random event from stored array
    return output
  } catch (e) {
    console.error(e)
  }
}

export { getInfo }
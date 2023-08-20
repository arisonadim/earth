import axios from 'axios'
import { apiUrl } from '@/const/path'
// import { useDateStore } from '@/stores/date'
// const dateInfo = useDateStore()

async function getDateDetails(e: string): Promise<any>  {
  // console.log('getDateDetails', e)
  try {
    const arr = e.split('-')
    if(!arr.length) return 'Error'
    const day = arr[2]
    const month = arr[1]
    const data = await axios.get(`${apiUrl}${month}/${day}/date`);
    return data.data || 'Error'
  } catch(e) {
    console.error(e);
  }
}

export {
  getDateDetails
}
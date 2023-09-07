// communication with external APIs, backend API methods

import { request } from '@/helpers'
import { apiUrl } from '@/const/path'
import type { Data } from '@/types'

function prepareUrl(date: string): string {
  const arr = date.split('-')
  if (arr.length < 3) {
    throw new Error('cannot split date')
    return ''
  }
  const day = arr[2]
  const month = arr[1]
  const url = `${apiUrl}${month}/${day}`
  return url
}

async function getInfo(e: string): Promise<Data[] | undefined> {
  try {
    const url = prepareUrl(e)
    const data = await request(url)
    return data?.data.events
  } catch (e) {
    console.error(e)
  }
}

export { getInfo }

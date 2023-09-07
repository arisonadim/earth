import axios from 'axios'

async function request(url: string): Promise<any> {
  try {
    const data = await axios.get(url)
    return data
  } catch (e) {
    console.error(e)
  }
}

export { request }

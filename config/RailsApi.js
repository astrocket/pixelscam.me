import axios from 'axios'

const API = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:3001' : 'https://api.pixelscam.com'

const homeIndex = `${API}`

async function get(url) {
  const response = await axios.get(url)
  return await response.json()
}

export default {
  homeIndex: get(homeIndex)
}

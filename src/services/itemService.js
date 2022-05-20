import { API_URL } from '../utils/constants'

export const getItemsAsync = async () => {
  try {
    const req = await fetch(`${API_URL}/items`)
    return await req.json()
  } catch (error) {
    console.error(error)
  }
}

export const getLatestItemAsync = async () => {
  const items = await getItemsAsync()

  return items.slice(0, 3)
}

import { getItemsAsync } from '../services/itemService'

export const getPathFromIds = async () => {
  const items = await getItemsAsync()

  const ids = items.map(item => {
    return {
      params: {
        id: item.id.toString()   // cada id de los objetos
      }
    }
  })

  return ids
}

export const getItemByIdAsync = async id => {
  const item = await getItemsAsync()
  const product = item.find(item => item.id.toString() === id)

  return {
    id,
    data: product
  }
}

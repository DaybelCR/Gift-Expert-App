export const getGifs = async (search) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=5cxOkdbBdUHCGwAuDIHgifPk38Filwsd&q=${search}&limit=10`
  const response = await fetch(url)
  const { data } = await response.json()
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return gifs
}
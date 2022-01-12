export const pokeImage = (id: string | number) => {
  return `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`
}

export const pokeId = (url: string) => {
  return url.split('/')[url.split('/').length - 2]
}

export const pokeCatch = (rate: number) => {
  const catchRate = Math.round((1 / 255) * rate)/100
  const isCatch = Math.random() < catchRate
  return isCatch
}

export const pokeRemoveDash = (data: string) => {
  let newData = data.replace('-' , ' ')
  return newData.replace(/./, first => first.toUpperCase())
}
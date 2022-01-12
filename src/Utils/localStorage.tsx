const itemName = 'mypokemon_192847111111'

export const getMyPokemonList = () => {
  const data = localStorage.getItem(itemName)
  return JSON.parse(data || '[]')
}

export const setMyPokemonList = (data: any) => {
  return localStorage.setItem(itemName, JSON.stringify(data))
}

export const removeAllPokemon = () => {
  return localStorage.removeItem(itemName)
}

import { useEffect, useState } from 'react'
import { getMyPokemons, removePokemon, removeAllPokemons } from '../../Utils/localStorage'

import MyPokemonListView from './MyPokemonListView'

const MyPokemonListContainer = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    setPokemons(getMyPokemons())
  }, [setPokemons, getMyPokemons])

  const releasePokemon = (nickname?: string) => {
    removePokemon(nickname)
    setPokemons(getMyPokemons())
  }

  const props = {
    pokemons,
    releasePokemon,
    removeAllPokemons,
  }

  return <MyPokemonListView {...props} />
}

export default MyPokemonListContainer
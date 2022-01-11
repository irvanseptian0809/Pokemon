import { useEffect } from 'react'

import PokemonListView from './PokemonListView'

const PokemonListContainer = () => {

  useEffect(() => {
    // Do Fetching Pokemon List
  }, [])

  return <PokemonListView />
}

export default PokemonListContainer
import React from 'react'
import PokemonCard from '../../Components/PokemonCard'
import SectionLoading from '../../Components/SectionLoading'

import { interfacePokemonList } from '../../Redux/Ducks/pokemonList'

interface interfacePokemonListView {
  pokemonList: interfacePokemonList[],
  handlePokemonDetail: (pokemonName: string) => void,
  isLoading: boolean,
}

const PokemonListView = ({
  pokemonList,
  isLoading,
  handlePokemonDetail,
}: interfacePokemonListView) => {
  return (
    <>
      {!isLoading ? (
        <div className="grid">
          {pokemonList.map((data: interfacePokemonList) => (
            <div className="col-2" key={data.name}>
              <PokemonCard
                name={data.name}
                img={data.image}
                isOwned
                owned={data.owned}
                onClick={() => handlePokemonDetail(data.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <SectionLoading />
      )}
      
    </>
  )
}

export default PokemonListView
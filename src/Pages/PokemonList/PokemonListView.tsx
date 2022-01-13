import React from 'react'
import PokemonCard from '../../Components/PokemonCard'
import SectionLoading from '../../Components/SectionLoading'
import Button from '../../Components/Button'

import { interfacePokemonList } from '../../Redux/Ducks/pokemonList'

interface interfacePokemonListView {
  pokemonList: interfacePokemonList[],
  handlePokemonDetail: (pokemonName: string) => void,
  handleFintOtherPokemons: () => void,
  isLoading: boolean,
}

const PokemonListView = ({
  pokemonList,
  isLoading,
  handlePokemonDetail,
  handleFintOtherPokemons,
}: interfacePokemonListView) => {
  return (
    <>
      {!isLoading ? (
        <>
          <Button
            size="large"
            label="Find another pokemons"
            onClick={handleFintOtherPokemons}
            isFullWidth
          />
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
        </>
      ) : (
        <SectionLoading />
      )}
      
    </>
  )
}

export default PokemonListView
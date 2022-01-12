import PokemonCard from '../../Components/PokemonCard'
import Button from '../../Components/Button'

import { interfacePokemonDetailData } from "../../Redux/Ducks/pokemonDetail"

interface interfaceMyPokemonList {
  pokemons: interfacePokemonDetailData[],
  releasePokemon: (nickname?: string) => void,
  removeAllPokemons: () => void,
}

const MyPokemonListView = ({
  pokemons,
  releasePokemon,
  removeAllPokemons,
}: interfaceMyPokemonList) => {
  return (
    <div className="grid">
      {pokemons.map((data: interfacePokemonDetailData) => (
        <div className="col-2" key={data.id}>
          <PokemonCard
            name={data.name}
            img={data.image}
            nickname={data.nickname}
            button={
              <Button
                label="Release Pokemon"
                type="secondary"
                onClick={() => releasePokemon(data.nickname)}
                isFullWidth
              />
            }
          />
        </div>
      ))}
    </div>
  )
}

export default MyPokemonListView
import PokemonCard from '../../Components/PokemonCard'
import { interfacePokemonDetailData } from "../../Redux/Ducks/pokemonDetail"

interface interfaceMyPokemonList {
  myPokemonList: interfacePokemonDetailData[],
  removePokemon: (nickname: string) => void,
}

const MyPokemonListView = ({
  myPokemonList,
  removePokemon,
}: interfaceMyPokemonList) => {
  return (
    <>
      {myPokemonList.map((data: interfacePokemonDetailData) => (
        <div>{data.name}</div>
      ))}
    </>
  )
}

export default MyPokemonListView
import { combineReducers } from 'redux'
import pokemonDetail from '../Ducks/pokemonDetail'
import pokemonList from '../Ducks/pokemonList'
import myPokemonList from '../Ducks/myPokemonList'

const appReducers = combineReducers({
  pokemonDetail,
  pokemonList,
  myPokemonList,
})

const rootReducers = (state: any, action: any) => {
  return appReducers(state, action)
}

export default rootReducers

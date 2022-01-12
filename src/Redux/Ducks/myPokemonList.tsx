import createReducer from '../../Utils/createReducer'
import { interfacePokemonDetailData } from './pokemonDetail'

export const MY_POKEMON_LIST_ADD = 'MY_POKEMON_LIST_ADD'
export const MY_POKEMON_LIST_REMOVE = 'MY_POKEMON_LIST_REMOVE'

export interface interfaceMyPokemonList {
  data: interfacePokemonDetailData[],
}

export const INITIAL_STATE: interfaceMyPokemonList = {
  data: [],
}

const reducer = createReducer(INITIAL_STATE, {
  [MY_POKEMON_LIST_ADD]: (state: any, payload: interfacePokemonDetailData) => ({
    ...state,
    data: [...state.data, payload],
  }),
  [MY_POKEMON_LIST_REMOVE]: (state: any, payload: string) => ({
    ...state,
    data: state.data.filter((data: interfacePokemonDetailData) => data.nickname !== payload),
  }),
})

export const myPokemonListAdd = (payload: interfacePokemonDetailData) => ({
  type: MY_POKEMON_LIST_ADD,
  payload,
})
export const myPokemonListRemove = (payload: string) => ({
  type: MY_POKEMON_LIST_REMOVE,
  payload,
})

export default reducer

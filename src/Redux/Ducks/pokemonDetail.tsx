import createReducer from '../../Utils/createReducer'

export const POKEMON_DETAIL_FETCH = 'POKEMON_DETAIL_FETCH'
export const POKEMON_DETAIL_FETCH_SUCCESS = 'POKEMON_DETAIL_FETCH_SUCCESS'
export const POKEMON_DETAIL_FETCH_FAILED = 'POKEMON_DETAIL_FETCH_FAILED'

export const POKEMON_DETAIL_SPECIES_FETCH = 'POKEMON_DETAIL_SPECIES_FETCH'
export const POKEMON_DETAIL_SPECIES_FETCH_SUCCESS = 'POKEMON_DETAIL_SPECIES_FETCH_SUCCESS'

interface interfacePokemonMoves {
  move: {
    name: string,
  }
}

interface interfacePokemonTypes {
  slot: number,
  type: {
    name: string,
  }
}

export interface interfacePokemonDetailData {
  name: string,
  image?: string,
  owned: number,
  nickname?: string,
  moves: interfacePokemonMoves[],
  types: interfacePokemonTypes[],
  capture_rate: number,
}

export interface interfacePokemonDetail {
  data: interfacePokemonDetailData,
  isLoading: boolean,
  isError: boolean,
  errorMessage: string,
}

export const INITIAL_STATE: interfacePokemonDetail = {
  data: {
    name: '',
    image: '',
    owned: 0,
    moves: [],
    types: [],
    capture_rate: 0,
  },
  isLoading: false,
  isError: false,
  errorMessage: '',
}

const reducer = createReducer(INITIAL_STATE, {
  [POKEMON_DETAIL_FETCH]: (state: any) => ({
    ...state,
    isLoading: true,
  }),
  [POKEMON_DETAIL_FETCH_SUCCESS]: (state: any, payload: interfacePokemonDetailData) => ({
    ...state,
    isLoading: false,
    isError: false,
    data: {
      ...state.data,
      ...payload,
    },
  }),
  [POKEMON_DETAIL_FETCH_FAILED]: (state: any, payload: string) => ({
    ...state,
    isLoading: false,
    isError: true,
    errorMessage: payload,
  }),

  [POKEMON_DETAIL_SPECIES_FETCH]: (state: any) => ({
    ...state,
    isLoading: true,
  }),
  [POKEMON_DETAIL_SPECIES_FETCH_SUCCESS]: (state: any, payload: any) => ({
    ...state,
    isLoading: false,
    isError: false,
    data: {
      ...state.data,
      capture_rate: payload.capture_rate,
    },
  }),
})

export const pokemonDetailFetch = (payload: string) => ({
  type: POKEMON_DETAIL_FETCH,
  payload,
})
export const pokemonDetailFetchSuccess = (payload: any) => ({
  type: POKEMON_DETAIL_FETCH_SUCCESS,
  payload,
})
export const pokemonDetailFetchFailed = (payload: string) => ({
  type: POKEMON_DETAIL_FETCH_FAILED,
  payload,
})


export const pokemonDetailSpeciesFetch = (payload: string) => ({
  type: POKEMON_DETAIL_SPECIES_FETCH,
  payload,
})
export const pokemonDetailSpeciesFetchSuccess = (payload: any) => ({
  type: POKEMON_DETAIL_SPECIES_FETCH_SUCCESS,
  payload,
})

export default reducer

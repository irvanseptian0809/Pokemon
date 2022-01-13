import * as ducks from '../pokemonDetail'
import reducer from '../pokemonDetail'

const mockResponseSuccess = {
  name: 'Ivysour',
  nickname: '',
  image: 'https://images.com/image.png',
  owned: 3,
  id: 5,
  moves: [],
  types: [],
  capture_rate: 225,
}

const mockResponseFailed = 'Failed Fetching Data'

describe('Testing Action Ducks pokemonDetail', () => {
  it('When pokemon detail fetch', () => {
    const payload = '1'
    const expected = {
      payload,
      type: ducks.POKEMON_DETAIL_FETCH,
    }
    expect(ducks.pokemonDetailFetch(payload)).toEqual(expected)
  })

  it('When pokemon detail fetch is success', () => {
    const expected = {
      payload: mockResponseSuccess,
      type: ducks.POKEMON_DETAIL_FETCH_SUCCESS,
    }
    expect(ducks.pokemonDetailFetchSuccess(mockResponseSuccess)).toEqual(expected)
  })

  it('When pokemon detail fetch is failed', () => {
    const expected = {
      payload: mockResponseFailed,
      type: ducks.POKEMON_DETAIL_FETCH_FAILED,
    }
    expect(ducks.pokemonDetailFetchFailed(mockResponseFailed)).toEqual(expected)
  })

  it('When pokemon detail species fetch', () => {
    const payload = '1'
    const expected = {
      payload,
      type: ducks.POKEMON_DETAIL_SPECIES_FETCH,
    }
    expect(ducks.pokemonDetailSpeciesFetch(payload)).toEqual(expected)
  })
  it('When pokemon detail fetch is success', () => {
    const payload = '1'
    const expected = {
      payload,
      type: ducks.POKEMON_DETAIL_SPECIES_FETCH_SUCCESS,
    }
    expect(ducks.pokemonDetailSpeciesFetchSuccess(payload)).toEqual(expected)
  })
  it('When pokemon detail fetch is failed', () => {
    const expected = {
      payload: mockResponseFailed,
      type: ducks.POKEMON_DETAIL_SPECIES_FETCH_SUCCESS,
    }
    expect(ducks.pokemonDetailSpeciesFetchSuccess(mockResponseFailed)).toEqual(expected)
  })
})

describe('Testing reducer pokemonDetail', () => {
  it('When pokemon detail fetch', () => {
    const action = {
      payload: 'mockResponseFailed',
      type: ducks.POKEMON_DETAIL_FETCH,
    }
    const expected = {
      ...ducks.INITIAL_STATE,
      isLoading: true,
    }
    expect(reducer(ducks.INITIAL_STATE, action)).toEqual(expected)
  })
})
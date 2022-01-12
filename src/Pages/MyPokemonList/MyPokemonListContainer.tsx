import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { myPokemonListRemove } from '../../Redux/Ducks/myPokemonList'

import MyPokemonListView from './MyPokemonListView'

const MyPokemonListContainer = () => {
  const dispatch = useDispatch()
  const myPokemonList = useSelector((state: any) => state.myPokemonList)

  const removePokemon = (nickname: string) => {
    dispatch(myPokemonListRemove(nickname))
  }

  const props = {
    myPokemonList,
    removePokemon,
  }

  return <MyPokemonListView {...props} />
}

export default MyPokemonListContainer
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams  } from 'react-router-dom'

import { pokemonDetailFetch } from '../../Redux/Ducks/pokemonDetail'
import { pokeCatch } from '../../Utils/pokemon'
import { getMyPokemons, addPokemons } from '../../Utils/localStorage'

import PokemonDetailView from './PokemonDetailView'

const PokemonDetailContainer = () => {
  const params = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state.pokemonDetail)
  const { data, isLoading } = state

  const [isModalShow, setIsModalShow] = useState(false)
  const [isCatching, setIsCatching] = useState(false)
  const [isCatch, setIsCatch] = useState(false)

  useEffect(() => {
    if (params.pokemon) {
      dispatch(pokemonDetailFetch(params.pokemon))
    } else {
      navigate('/')
    }
  }, [dispatch, navigate, params])

  const handleCatchPokemon = () => {
    const catchPokemon = pokeCatch(data.capture_rate)

    setIsCatching(true)
    setTimeout(() => {
      if (catchPokemon) {
        setIsCatch(catchPokemon)
      } else {
        setIsCatch(false)
      }
      setIsCatching(false)
    }, 7000)
    setIsModalShow(true)
  }

  const handleReleasePokemon = () => {
    setIsModalShow(false)
    setIsCatch(false)
  }

  const handleFindPokemon = () => {
    navigate('/')
  }

  const handleSavePokemon = () => {
    setIsModalShow(false)
    addPokemons(data)
  }

  const props = {
    pokemonDetail: data,
    isLoading,
    isModalShow,
    isCatching,
    isCatch,
    handleCatchPokemon,
    handleReleasePokemon,
    handleFindPokemon,
    handleSavePokemon,
  }

  return <PokemonDetailView {...props} />
}

export default PokemonDetailContainer
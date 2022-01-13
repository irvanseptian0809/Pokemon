import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams  } from 'react-router-dom'

import { pokemonDetailFetch, pokemonDetailSetNickname } from '../../Redux/Ducks/pokemonDetail'
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
    resetNickname()
  }

  const handleFindPokemon = () => {
    setIsModalShow(false)
    navigate('/')
  }

  const handleSavePokemon = () => {
    setIsModalShow(false)
    setIsModalShow(false)
    addPokemons(data)
    resetNickname()
  }

  const handleNickname = (nickname: string) => {
    dispatch(pokemonDetailSetNickname(nickname))
  }

  const resetNickname = () => {
    dispatch(pokemonDetailSetNickname(''))
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
    handleNickname,
  }

  return <PokemonDetailView {...props} />
}

export default PokemonDetailContainer
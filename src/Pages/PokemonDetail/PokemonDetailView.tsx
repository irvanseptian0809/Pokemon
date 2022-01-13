import React from 'react'
import PokemonCard from '../../Components/PokemonCard'
import Label from '../../Components/Label'
import Section from '../../Components/Section'
import Button from '../../Components/Button'
import SectionLoading from '../../Components/SectionLoading'
import Modal from '../../Components/Modal'
import Input from '../../Components/Input'

import { interfacePokemonDetailData } from '../../Redux/Ducks/pokemonDetail'
import { pokeRemoveDash } from '../../Utils/pokemon'

interface interfacePokemonDetailView {
  pokemonDetail: interfacePokemonDetailData,
  isLoading: boolean,
  isModalShow: boolean,
  isCatching: boolean,
  isCatch: boolean,
  isUsedNickname: boolean,
  handleCatchPokemon: () => void,
  handleReleasePokemon: () => void,
  handleFindPokemon: () => void,
  handleSavePokemon: () => void,
  handleNickname: (value: string) => void,
}

const PokemonDetailView = ({
  pokemonDetail,
  isLoading,
  isModalShow,
  isCatching,
  isCatch,
  isUsedNickname,
  handleCatchPokemon,
  handleReleasePokemon,
  handleFindPokemon,
  handleSavePokemon,
  handleNickname,
}: interfacePokemonDetailView) => {
  return (
    <>
      <Modal
        title={!isCatching ? isCatch ? 'Catched!' : 'Failed to catch' : ''}
        isShow={isModalShow}
        isLeftButton={!isCatching}
        leftButton={
          <Button
            size="large"
            type="secondary"
            label={`${isCatch ? 'Release Pokemon' : 'Find another pokemon'}`}
            onClick={isCatch ? handleReleasePokemon : handleFindPokemon}
            isFullWidth
          />
        }
        isRightButton={!isCatching}
        rightButton={
          <Button
            size="large"
            label={`${isCatch ? (isUsedNickname ? 'Nickname has been used' : 'Save Pokemon') : 'Try to catch again..'}`}
            onClick={isCatch ? handleSavePokemon : handleCatchPokemon}
            isDisabled={(isCatch && pokemonDetail.nickname === '') || isUsedNickname}
            isFullWidth
          />
        }
      >
        <>
          {isCatching ? (
            <SectionLoading type="catch" />
          ) : (
            <>
              <PokemonCard
                name={pokemonDetail.name}
                img={pokemonDetail.image}
              />
              {isCatch && (
                <Input
                  value={pokemonDetail.nickname}
                  onChange={(e) => handleNickname(e.target.value)}
                  placeholder="Give a pokemon name.."
                />
              )}
            </>
          )}
        </>
      </Modal>

      {/* Content */}
      {!isLoading ? (
        <div className="grid">
          <div className="col-3">
            <PokemonCard
              name={pokemonDetail.name}
              img={pokemonDetail.image}
              isOwned
              owned={isCatch ? pokemonDetail.owned+1 : pokemonDetail.owned}
              button={
                !isCatch && <Button
                  size="large"
                  label="Catch Pokemon !!!"
                  onClick={handleCatchPokemon}
                  isFullWidth
                />
              }
            />
          </div>
          <div className="col-9">
            <Section title="Moves">
              <>
                {pokemonDetail.moves.map((data, index) => (
                  <Label key={index} label={pokeRemoveDash(data.move.name)} />
                ))}
              </>
            </Section>

            <Section title="Types">
              <>
                {pokemonDetail.types.map((data, index) => (
                  <Label key={index} label={pokeRemoveDash(data.type.name)} color="orange" />
                ))}
              </>
            </Section>
          </div>
        </div>
      ) : (
        <SectionLoading />
      )}
    </>
  )
}

export default PokemonDetailView
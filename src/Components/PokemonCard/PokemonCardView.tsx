
import './styles.scss'

interface interfacePokemonCardView {
  img?: string,
  name: string,
  onClick?: () => void,
  button?: React.ReactNode,
  isOwned?: boolean,
  owned?: number,
}

const PokemonCardView = ({
  img,
  name,
  onClick,
  button,
  isOwned,
  owned,
}: interfacePokemonCardView) => {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <div className="pokemon-image">
        <img src={img} alt={name} />
      </div>
      <div className="pokemon-detail">
        <div className="title">{name}</div>
        
        {isOwned && (
          <div className="owned">
            {`Total Owned : ${owned}`}
          </div>
        )}
        {button && button}
      </div>
    </div>
  )
}

export default PokemonCardView
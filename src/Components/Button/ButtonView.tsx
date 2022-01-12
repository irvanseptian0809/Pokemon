import './styles.scss'

interface interfaceButtonView {
  label: string,
  onClick: () => void,
  size?: string,
  isFullWidth?: boolean,
  type?: string,
}

const ButtonView = ({
  label,
  onClick,
  size = 'normal',
  isFullWidth = false,
  type = 'default',
}: interfaceButtonView) => {
  return (
    <button
      className={`button button-${size} button-${type} ${isFullWidth && 'full-width'}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default ButtonView
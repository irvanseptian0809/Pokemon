import React from 'react'

import './styles.scss'

interface interfaceModalView {
  isShow: boolean,
  isLeftButton?: boolean,
  leftButton?: React.ReactNode,
  isRightButton?: boolean,
  rightButton?: React.ReactNode,
  children: React.ReactNode,
  title: string,
}

const ModalView = ({
  isShow,
  isLeftButton,
  leftButton,
  isRightButton,
  rightButton,
  children,
  title,
}: interfaceModalView) => {
  return (
    <div className={`modal ${isShow && 'modal-active'}`}>

      <div className="modal-content">
        <p className="modal-title">
          {title}
        </p>
        
        {children}

        <div className="modal-action">
          {isLeftButton && leftButton}
          {isRightButton && rightButton}
        </div>
      </div>

    </div>
  )
}

export default ModalView
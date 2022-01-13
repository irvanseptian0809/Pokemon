import React, { useEffect } from 'react'

import ModalView from './ModalView'

const ModalContainer = (props :any) => {
  useEffect(() => {
    if (props.isShow) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [props.isShow])

  return <ModalView {...props} />
}

export default ModalContainer

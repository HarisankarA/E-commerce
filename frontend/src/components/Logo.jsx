import React from 'react'
import logo from '../assest/leoparadise.png'

const Logo = ({ height = '100px', width = '100px' }) => {

  return (
    <img src={logo} alt="Logo" style={{ height, width }} />
  )
}

export default Logo
import React from 'react'
import './header.scss'
import logo from '../../img/marvel-logo.png'

const Header = () => {
    return (
      <div className='nav-wrapper'>
        <div className='nav'>

                <img src={logo} alt="" />

        </div>
        </div>
    )
}

export default Header

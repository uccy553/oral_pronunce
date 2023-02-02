import React from 'react'
import logo from '../assets/Logo.svg'
import '../styles/Navbar.css'
import avatar from '../assets/avatar.jpg'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src={logo} alt="logo" className='logo' />
            <h3>English(Oral - Pronunciation)</h3>
            <img src={avatar} alt="avatar" className="avatar" />
        </nav>
    </header>
  )
}

export default Navbar
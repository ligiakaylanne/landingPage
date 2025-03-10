import React from 'react'
import logo from "../assets/img/logo.png"; 
import './Header.css'


function Header() {
  return (
    <>
     <header className="header">
      <img src={logo} alt="Logo da empresa" className="logo" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#info">Informações</a></li>
          <li><a href="#planos">Planos</a></li>
          <li><a href="#feedback">Feedback</a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header
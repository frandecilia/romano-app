import React, { useState } from 'react';
import './header.css'
import fondoheader from "../../../assets/img/fondoheader.jpg"
import { Link } from 'react-router-dom'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className="mainHeader">
      <div className="navContainer">
        <div className="navContent container">
          <div className="logo">
          <Link to="/">
              <h2>
                Romano <span className="yellowText">Desings</span>
              </h2>
            </Link>
          </div>
          <nav className={`nav ${navOpen ? 'show' : 'hide'}`}>
          <Link to='/'>Inicio</Link>
            <Link to='/products'>Productos</Link>
            <Link to='/about'>Sobre nosotros</Link>
            <Link to='/contact'>Contacto</Link>
            <p onClick={toggleNav} className="btnCerrar">✕</p>
          </nav>
          <div className="headerLogos">
            <div className="hamburguesa" onClick={toggleNav}>
              <i className="fa-solid fa-bars"></i>
            </div>
            <Link to='/products' title='a'>
            <i className="fas fa-cart-shopping"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="headerContent">
        <div className="headerContainer">
          <div className="headerText">
            <h2>Bienvenido!</h2>
            <Link to='/products' className="btn borders">Productos</Link>
          </div>
          <img className="imagenFondo" src={fondoheader} alt="un living con mucha luz"/>
        </div>
      </div>
    </header>
  );
};

export default Header;

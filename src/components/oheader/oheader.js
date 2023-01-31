import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Oheader= (countProducts) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="mainHeader">
      <div className="navContainer">
        <div className="navContent container">
          <div className="logo">
            <Link to='/'><h2>Romano <span className="yellowText">Desings</span></h2></Link>
          </div>
          <nav className={`nav ${menuOpen ? '' : 'hide'}`}>
            <Link to='/'>Inicio</Link>
            <Link to='/products'>Productos</Link>
            <Link to='/about'>Sobre nosotros</Link>
            <Link to='/contact'>Contacto</Link>
            <p onClick={handleMenuToggle} className="btnCerrar">✕</p>
          </nav>                
          <div className="headerLogos">      
            <div className="hamburguesa" onClick={handleMenuToggle}>
              <i className="fa-solid fa-bars"></i>
            </div>
            <a className="modal_opener" title="a">
              <i className="fas fa-cart-shopping"></i>
              <span className="badge" id="cant-elementos-carrito">0</span>
            </a>
          </div>
        </div>         
      </div>
    </header>
  );
};

export default Oheader;

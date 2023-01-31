import React, { useState } from 'react';
import './h.css';
import Modal from '../../products/modal/modal';
import { Link } from 'react-router-dom';

const AllH = (props) => {
  const [mostrar, setMostrar] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const {
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts
  } = props;

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

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
          <nav className={`nav ${showNav ? 'show' : 'hide'}`}>
          <Link to='/'>Inicio</Link>
            <Link to='/products'>Productos</Link>
            <Link to='/about'>Sobre nosotros</Link>
            <Link to='/contact'>Contacto</Link>
            <p onClick={handleShowNav} className="btnCerrar">✕</p>
          </nav>
          <div className="headerLogos">
            <div className="hamburguesa" onClick={handleShowNav}>
              <i className="fa-solid fa-bars"></i>
            </div>
            <a onClick={() => setMostrar(true)} className="modal_opener" title="a">
              <i className="fas fa-cart-shopping"></i>
              <span className="badge" id="cant-elementos-carrito">
                {countProducts}
              </span>
            </a>
          </div>
        </div>
      </div>
      <Modal
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        isOpen={mostrar}
        onClose={() => setMostrar(false)}
      />
    </header>
  );
};

export default AllH;

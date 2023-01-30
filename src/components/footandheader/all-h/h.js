import './h.css'
import { useState } from 'react';
import Modal from '../../products/modal/modal';

const AllH= () => {
    const [mostrar,setMostrar]=useState(false);
    return(
        <header className="mainHeader">
                <div className="navContainer">
                    <div className="navContent container">
                        <div className="logo"><a href="/index.html"><h2>Romano <span className="yellowText">Desings</span></h2></a></div>
                        <nav className="nav hide">
                            <a href="/index.html">Inicio</a>
                            <a href="#">Productos</a>
                            <a href="/views/about.html">Sobre nosotros</a>
                            <a href="/views/contact.html">Contacto</a>
                        </nav>                
                        <div className="headerLogos">      
                            <div className="hamburguesa">
                                <i className="fa-solid fa-bars"></i>
                            </div>
                            <a onClick={() => setMostrar(true)} className="modal_opener" title="a">
                                <i className="fas fa-cart-shopping"></i>
                                <span className="badge" id="cant-elementos-carrito">5</span>
                              </a>
                        </div>
                        </div>         
                    </div>
                    <Modal isOpen={mostrar} onClose={() => setMostrar(false)}/>
                </header>
            
    )
}

export default AllH;
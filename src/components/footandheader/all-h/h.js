import './h.css'
import { useState } from 'react';
import Modal from '../../products/modal/modal';
import { Link } from 'react-router-dom';
const AllH= (props) => {
    const [mostrar,setMostrar]=useState(false);
    /*destructuracion de objetos, sirvio para solucionar el error del undefined*/
    const {allProducts,setAllProducts,total,setTotal,countProducts,setCountProducts} =props
    return(
        <header className="mainHeader">
                <div className="navContainer">
                    <div className="navContent container">
                        <div className="logo"><Link to='/' ><h2>Romano <span className="yellowText">Desings</span></h2></Link></div>
                        <nav className="nav hide">
                            <Link to='/'>Inicio</Link>
                            <Link to='/products'>Products</Link>
                            <a href="/views/about.html">Sobre nosotros</a>
                            <a href="/views/contact.html">Contacto</a>
                        </nav>                
                        <div className="headerLogos">      
                            <div className="hamburguesa">
                                <i className="fa-solid fa-bars"></i>
                            </div>
                            <a onClick={() => setMostrar(true)} className="modal_opener" title="a">
                                <i className="fas fa-cart-shopping"></i>
                                <span className="badge" id="cant-elementos-carrito">{countProducts}</span>
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
                    isOpen={mostrar} onClose={() => setMostrar(false)}/>
                </header>
            
    )
}

export default AllH;
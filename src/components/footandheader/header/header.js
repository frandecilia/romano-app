import './header.css'
import fondoheader from "../../../assets/img/fondoheader.jpg"
import { Link } from 'react-router-dom'

const Header= () =>{
    return(
        <header className="mainHeader">
        <div className="navContainer">
            <div className="navContent container">
                <div className="logo"><a href="index.html"><h2>Romano <span className="yellowText">Desings</span></h2></a></div>
                <nav className="nav hide">
                    <a href="#">Inicio</a>
                    <a href="views\products.html">Productos</a>
                    <a href="views\about.html">Sobre nosotros</a>
                    <a href="views\contact.html">Contacto</a>
                </nav>                
                <div className="headerLogos">
                    <div className="hamburguesa">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                        <a href="views\cart.html" title="a"><i className="fas fa-cart-shopping"></i></a>
                </div>
            </div>
        </div>
        <div className="headerContent">
            <div className="headerContainer">
                <div className="headerText">
                    <h2>Bienvenido!</h2>
                <Link to='/products' className="btn borders"> 

                </Link>    
                <a href="src/components/products/products.js" className="btn borders">Productos</a>
                </div>
                <img className="imagenFondo" src={fondoheader} alt="un living con mucha luz"/>
            </div>
        </div>
    </header>
    )
}

export default Header;
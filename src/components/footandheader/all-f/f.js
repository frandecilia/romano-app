import './f.css'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const AllF= () => {
    return(
        <footer className="footerDistributed">
			    <div className="footerLeft">
                    <img src={logo} alt=""/>
				    <h3><span className="yellowText"> Romano Desings</span></h3>
				    <p className="footerLinks">
					<Link to='/'>Inicio</Link>
            <Link to='/products'>Productos</Link>
            <Link to='/about'>Sobre nosotros</Link>
            <Link to='/contact'>Contacto</Link>
				    </p>
				    <p className="footerCompanyName">© 2022 Romano Desings Pvt. Ltd.</p>
			    </div>
			    <div className="footerCenter">
				    <div>
					    <i className="fa fa-map-marker"></i>
					    <p><span>Av. ejemplo 444 , Santiago del Estero, Argentina</span></p>
				    </div>
				    <div>
					    <i className="fa fa-phone"></i>
					    <p>+54 3844-55-5555</p>
				    </div>
				    <div>
					    <i className="fa fa-envelope"></i>
					    <p><a href="mailto:contacto@mail.com">contacto@romanodesings.com</a></p>
				    </div>
			    </div>
			    <div className="footerRight">
				    <p className="footerCompanyAbout">
					    <span>Sobre nosotros</span>
					    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptatum fugit rem nisi fugiat enim incidunt repudiandae! Possimus doloribus.
                    </p>
				    <div className="footerIcons">
					    <a href="#" title="a"><i className="fa fa-facebook"></i></a>
					    <a href="#" title="a"><i className="fa fa-twitter"></i></a>
					    <a href="#" title="a"><i className="fa fa-instagram"></i></a>
				    </div>
			    </div>
		    </footer>
    )
}

export default AllF;
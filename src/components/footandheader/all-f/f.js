import './f.css'

const AllF= () => {
    return(
        <footer className="footerDistributed">
			    <div className="footerLeft">
                    <img src="/public\assets\img\logo.png" alt=""/>
				    <h3><span className="yellowText"> Romano Desings</span></h3>
				    <p className="footerLinks">
					    <a href="/index.html">Inicio</a>
					    <a href="/views/about.html">Sobre nosotros</a>
					    <a href="/views/products.html">Productos</a>
					    <a href="/views/contact.html">Contacto</a>
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
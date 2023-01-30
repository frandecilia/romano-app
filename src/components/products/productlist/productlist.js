import stockproductos from '../../../../src/data'
import './productlist.css'

const ProductList= () => {
     return <div className="productos">{
        stockproductos.map(product => (
            <div className="tarjeta" key={product.id}>
                <div className="cuerpo">
                    <img src={product.img}
                    alt={product.nombre} 
                    />
                </div>
                <p className="precioProducto">${product.precio}</p>
                <p className="nombreProducto">{product.nombre}</p>
                <a ><i className="fa-solid fa-cart-plus"></i>Añadir al carrito</a>
            </div>
        ))


     }</div>;
    
};

export default ProductList;
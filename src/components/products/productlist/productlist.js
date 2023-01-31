import stockproductos from '../../../../src/data'
import './productlist.css'

const ProductList= ({allProducts,setAllProducts,total,setTotal,countProducts,setCountProducts,products,setproducts}) => { 
    const onAddProduct=(product) =>{
        if(allProducts.find(item => item.id === product.id)){
            const products= allProducts.map(item => item.id === product.id ? {...item,cantidad: item.cantidad + 1}: item)

            setTotal(total + product.precio * product.cantidad)
            setCountProducts(countProducts + product.cantidad)
            return setAllProducts([...products])
        }

        setTotal(total + product.precio * product.cantidad)
        setCountProducts(countProducts + product.cantidad)
        setAllProducts([...allProducts,product])

    }
     return <div className="productos">{
        products.map(product => (
            <div className="tarjeta" key={product.id}>
                <div className="cuerpo">
                    <img src={product.img}
                    alt={product.nombre} 
                    />
                </div>
                <p className="precioProducto">${product.precio}</p>
                <p className="nombreProducto">{product.nombre}</p>
                <a onClick={() => onAddProduct(product) }><i className="fa-solid fa-cart-plus"></i>Añadir al carrito</a>
            </div>
        ))


     }</div>;
    
};

export default ProductList;
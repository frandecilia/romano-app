import './modal.css'

const Modal= (props) => {
    const {isOpen,onClose,allProducts,setAllProducts,total,setTotal,countProducts,setCountProducts} = props
    const onDeleteProduct= (product) => {
        
        const results=allProducts.filter(item => item.id !== product.id)
        setAllProducts(results)
        setTotal(total - product.precio * product.cantidad)
        setCountProducts(countProducts - product.cantidad)
    }

     const onClearCart= () => {
        setAllProducts([])
        setTotal(0)
        setCountProducts(0)
     }
    return(
        <div className="modal" style={{ display: isOpen ? 'grid' : 'none' }}>
      <div className="modal-container">
            <h1>Carrito</h1>
            <div className="erase-container">
                <button onClick={onClearCart} className="erase-cart-button">X</button>
                <a className="erase-cart">Vaciar Carrito</a>
            </div>
            {allProducts.length ? (
                <div className="cart-items">
                    {allProducts.map(product => (
                        <div className="cart-item" key={product.id}>
                        <img className="img-item-cart" src={product.img}/>
                        <div className="">
                        <p className="cart-item-p">Producto:{product.nombre}</p>
                        <p className="cart-item-p" >Precio:${product.precio}</p>
                        <p className="cart-item-quantity">Cantidad:{product.cantidad}</p>
                        <button onClick={() => onDeleteProduct(product)}  className="cart-item-remove-button">Eliminar Producto</button>
                        </div>
                        </div>
                        
                    ))
                    
                    
                    
                    
                    }
                </div> 
            ):(
                <p>
                    El carrito esta vacio!
                </p>
            )
            
            
            }
                           
                <div className="btnfunctions">
                    <button className='pagar-btn'>Pagar</button>
                    <button className="modal-close" onClick={onClose}>Continuar Comprando</button>
                    <div className='precio-total'>
                            <span >Total:   </span>
                            <p id="preciototal"> ${total}</p>

                </div>
            </div>
        
      </div>
    </div>
    )
}

export default Modal;
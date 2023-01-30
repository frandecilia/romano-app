import './modal.css'

const Modal= ({isOpen,onClose}) => {
    return(
        <div className="modal" style={{ display: isOpen ? 'grid' : 'none' }}>
      <div className="modal-container">
            <h1>Carrito</h1>
            <div className="erase-container">
                <button className="erase-cart-button">X</button>
                <a className="erase-cart">Vaciar Carrito</a>
            </div>
                <div className="cart-items">
            </div>
                <div className="btnfunctions">
                    <button className='pagar-btn'>Pagar</button>
                    <button className="modal-close" onClick={onClose}>Continuar Comprando</button>
                    <div className='precio-total'>
                            <span >Precio Total: </span>
                            <p id="preciototal"></p>

                    </div>
            </div>
        
      </div>
    </div>
    )
}

export default Modal;
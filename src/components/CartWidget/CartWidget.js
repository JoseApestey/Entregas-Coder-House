import cart from './assets/970907.svg'
import './CartWidget.css';

const CartWidget = () => {
  return(
    <div className='cart-widget-containter'>
      <img src={cart} alt='cart-widget' className='img-carrito' />
      0
    </div>
    )
}

export default CartWidget
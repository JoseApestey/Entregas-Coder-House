import cart from './assets/970907.svg'
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const totalQuantity  = useContext( CartContext )



  return(
    <Link to='/cart' className='CartWidget' style={{display: totalQuantity.totalQuantity > 0  }}>
      <img className='CartImg' src={cart} alt='cart-widget'/>
      { totalQuantity.totalQuantity > 0 && <span>{totalQuantity.totalQuantity}</span> }
    </Link>
    )
}

export default CartWidget
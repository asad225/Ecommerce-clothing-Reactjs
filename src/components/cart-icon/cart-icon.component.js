import './cart-icon.styles.scss';
import {ReactComponent as ShoppingICon} from '../../assests/shopping-bag.svg'
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

const CartIcon = () => {
    const { isCartOpen,setIsCartOpen , cartCount } = useContext(CartContext)
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }
    return(
        <div className='cart-icon-container'>
            <ShoppingICon className='shopping-icon' onClick={toggleIsCartOpen}/>
            <span className='item-icon'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingICon} from '../../assests/shopping-bag.svg'
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectIsCartOpen,selectCartCount } from '../../store/cart/cart.selector';



const CartIcon = () => {
    // const { isCartOpen,setIsCartOpen , cartCount } = useContext(CartContext)
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
    const dispatch = useDispatch()
    const toggleIsCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen))
    }
    return(
        <div className='cart-icon-container'>
            <ShoppingICon className='shopping-icon' onClick={toggleIsCartOpen}/>
            <span className='item-icon'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;
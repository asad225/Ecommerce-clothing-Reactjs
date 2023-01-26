import './product-card.styles.scss';
import Button from '../button/button.component'
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product;
    // const {addItemToCart} = useContext(CartContext)
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)


    const addProductToCart = () => {
        // addItemToCart(product)
        dispatch(addItemToCart(cartItems,product))
    }
    return(
        <div className='product-card-container'>
            <img src={imageUrl}  />
            <div className="footer">
                <span className="name"> {name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard
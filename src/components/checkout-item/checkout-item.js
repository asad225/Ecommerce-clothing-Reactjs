import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import {addItemToCart,clearItemFromCart,removeItemToCart} from '../../store/cart/cart.action'
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";


const CheckOutItem = ({ cartItem }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { name, imageUrl, price, quantity } = cartItem;
  // const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems,cartItem))
  }
  const removeItemHandler = () => {
    dispatch(removeItemToCart(cartItems,cartItem))
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}> &#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}> &#10095;</div>
      </span>
      <span className="price"> ${price} </span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItems,cartItem))}
      >
        {" "}
        &#10005;{" "}
      </div>
    </div>
  );
};

export default CheckOutItem;

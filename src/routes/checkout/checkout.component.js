import "./checkout.styles.scss";
// import { useContext } from "react";
// import { CartContext } from "../../context/cart-context";
import CheckOutItem from "../../components/checkout-item/checkout-item";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

const CheckOut = () => {
  // const { cartItems, addItemToCart, removeItemToCart , cartTotal } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total"> Total: ${cartTotal} </span>
    </div>
  );
};

export default CheckOut;

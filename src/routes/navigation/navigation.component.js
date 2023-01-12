import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart-context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)
  const signOutHandler = async()=>{
    await signOutUser();
    // setCurrentUser(null)
  }

  console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

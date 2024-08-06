import "./navigation.styles.css";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import flowerboyLogo from "../../assets/flowerboyLogo.svg";
import { CartContext } from "../../contexts/cart.context";
import Shop from "../../assets/shopping-cart.svg";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <>
      <div className="navigate">
        <Link to="/checkout">
          cart
          {cartCount}
        </Link>

        <Link to="/">
          <img src={flowerboyLogo} alt="" />
        </Link>

        <Link to="/shop">
          <img src={Shop} />
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;

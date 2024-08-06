import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.css";

const Checkout = () => {
  const { cartItems, clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const handleClearItem = (item) => clearItemFromCart(item);
  const handleIncrement = (item) => addItemToCart(item);
  const handleDecrement = (item) => removeItemFromCart(item);

  return (
    <>
      <div className="checkout-container">
        {cartItems.map((item) => {
          const { id, name, imageUrl, price, quantity } = item;
          return (
            <div key={id} className="checkout-item-container">
              <div className="image-container">
                <img src={imageUrl} alt={name} />
              </div>
              <span className="name">{name}</span>
              <span className="quantity">
                <div className="arrow" onClick={() => handleDecrement(item)}>
                  &#10094;
                </div>
                <span>{quantity}</span>
                <div className="arrow" onClick={() => handleIncrement(item)}>
                  &#10095;
                </div>
              </span>
              <span className="price">${(price * quantity).toFixed(2)}</span>
              <div
                className="remove-button"
                onClick={() => handleClearItem(item)}
              >
                &#10005;
              </div>
            </div>
          );
        })}
      </div>
      <button className="checkout-btn">Checkout</button>
    </>
  );
};

export default Checkout;

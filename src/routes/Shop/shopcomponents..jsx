import ShopData from "../../shopData.json";
import "./shop.styles.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Shop = () => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="shop-container">
      {ShopData.map((product) => {
        const { id, imageUrl, price, name } = product;
        const addProductCart = () => addItemToCart(product);

        return (
          <div key={id} className="shop">
            <img src={imageUrl} alt={`Item ${id}`} />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <button className="shop-now-button" onClick={addProductCart}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;

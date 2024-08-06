import { useContext } from "react";
import Fragrancedata from "../../fragrance.json";
import { CartContext } from "../../contexts/cart.context";

const FragranceProduct = () => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="shop-container">
      {Fragrancedata.map((product) => {
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

export default FragranceProduct;

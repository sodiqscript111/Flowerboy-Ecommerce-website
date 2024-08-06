import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cyclingshirts.styles.css";

const CyclingShirt = () => {
  const Cyclingdata = [
    {
      id: 54,
      name: "Chic Cap",
      imageUrl: "https://i.ibb.co/4WWD7Ty/asset-1.jpg",
      price: 23,
    },
  ];

  const { id, name, imageUrl, price } = Cyclingdata[0];
  const { addItemToCart } = useContext(CartContext);
  const addProductCart = () => addItemToCart(Cyclingdata[0]);

  return (
    <div key={id} className="shop1">
      <img src={imageUrl} alt={`Item ${id}`} />
      <p>{name}</p>
      <p>Price: ${price}</p>
      <button className="shop-now-button" onClick={addProductCart}>
        Add to cart
      </button>
    </div>
  );
};

export default CyclingShirt;

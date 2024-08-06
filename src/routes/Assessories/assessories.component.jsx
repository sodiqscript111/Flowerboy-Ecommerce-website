import Accessories from "../../accessories.json";
const Accessorie = () => {
  return (
    <div className="shop-container">
      {Accessories.map(({ id, imageUrl, price, name }) => (
        <div key={id} className="shop">
          <img src={imageUrl} alt={`Item ${id}`} />
          <p>{name}</p>
          <p>Price: ${price}</p>
          <button className="shop-now-button"> Add to cart</button>
        </div>
      ))}
    </div>
  );
};
export default Accessorie;

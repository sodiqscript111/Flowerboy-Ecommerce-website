import BedData from "../../bed.json";

const BedShop = () => {
  return (
    <div className="shop-container">
      {BedData.map(({ id, imageUrl, price, name }) => (
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
export default BedShop;

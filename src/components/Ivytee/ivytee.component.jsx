import IvyShirt from "../../assets/ivytee.jpg";
import "./ivytee.styles.css";
import { useNavigate } from "react-router-dom";
const IvyClothes = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/ivy tee");
  };
  return (
    <div className="ivyContainer" onClick={goToAbout}>
      <img src={IvyShirt} className="ivypic" />
      <div className="content1">
        <h1 className="cyclingHeader">FlowerBoy Shirt</h1>

        <button className="shop-now-button">FlowerBoy Now Available</button>
      </div>
    </div>
  );
};

export default IvyClothes;

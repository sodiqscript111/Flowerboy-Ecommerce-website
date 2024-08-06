import CyclingShirt from "../../assets/cycleshirt.jpg";
import { useNavigate } from "react-router-dom";
import "./cycling.styles.css";
const CyclingClothes = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/cycling shirts");
  };
  return (
    <div className="cyclingContainer" onClick={goToAbout}>
      <img src={CyclingShirt} className="cyclingpic" />

      <div className="content0">
        <h1 className="cyclingHeader">Cycling Shirt</h1>

        <button className="shop-now-button">Cycling Shirt Now Available</button>
      </div>
    </div>
  );
};

export default CyclingClothes;

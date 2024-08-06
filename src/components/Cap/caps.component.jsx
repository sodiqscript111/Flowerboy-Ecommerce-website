import { useNavigate } from "react-router-dom";
import "./caps.style.css";
import Capsimage from "../../assets/asset.jpeg";
const Caps = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/accesories");
  };
  return (
    <div className="capContainer" onClick={goToAbout}>
      <img src={Capsimage} className="Capspic" />
      <div className="content3">
        <h1>Accessories</h1>
        <button className="shop-now-button"> Shop Accessories Now</button>
      </div>
    </div>
  );
};

export default Caps;

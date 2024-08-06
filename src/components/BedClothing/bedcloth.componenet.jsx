import { useNavigate } from "react-router-dom";
import "./bedcloth.styles.css";
const BedCloth = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/bedcloth");
  };
  return (
    <div className="content4" onClick={goToAbout}>
      <h1 className="bedheading">Cotton Bed Clothing</h1>
      <button className="shop-now-button"> Bed Clothing Now Available</button>
    </div>
  );
};

export default BedCloth;

import "./fragrance.style.css";
import { useNavigate } from "react-router-dom";
const Fragrance = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/fragrance");
  };
  return (
    <div className="content5" onClick={goToAbout}>
      <h1 className="fragranceheading">Fragrance</h1>
      <button className="shop-now-button"> Fragrance Now Available</button>
    </div>
  );
};

export default Fragrance;

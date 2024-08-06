import { useNavigate } from "react-router-dom";

import "./shopall.styles.css";

const Shopall = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/Shop");
  };
  return (
    <div className="content6" onClick={goToAbout}>
      <h1 className="shopheading">Shop All</h1>
    </div>
  );
};

export default Shopall;

import BckgroundVideo from "../../components/BackgroundVideo/background.component";
import "./home.styles.css";
import CyclingClothes from "../../components/CyclingShirt/cycling.component";
import IvyClothes from "../../components/Ivytee/ivytee.component";
import Fragrance from "../../components/Fragrance/fragrance.component";
import Caps from "../../components/Cap/caps.component";
import BedCloth from "../../components/BedClothing/bedcloth.componenet";
import Shopall from "../../components/ShopAll/shopall.component";
import EmblaCarousel from "../../components/Slides/slides.component";
const Home = () => {
  return (
    <div>
      <BckgroundVideo />
      <div className="Clothes-section">
        <CyclingClothes className="clothes" />
        <IvyClothes className="clothes" />
      </div>
      <Caps />
      <EmblaCarousel />
      <BedCloth />
      <Fragrance />
      <Shopall />
    </div>
  );
};

export default Home;

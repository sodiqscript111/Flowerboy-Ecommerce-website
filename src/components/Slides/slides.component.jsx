import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Slidesimage1 from "../../assets/asset 7.jpeg";
import Slidesimage2 from "../../assets/asset 8.jpeg";
import Slidesimage3 from "../../assets/asset 9.jpeg";
import Slidesimage4 from "../../assets/asset 10.jpeg";
import Slidesimage5 from "../../assets/asset 11.jpeg";
import Slidesimage6 from "../../assets/asset 12.jpeg";
import Slidesimage7 from "../../assets/asset 13.jpeg";
import Slidesimage8 from "../../assets/asset 14.jpeg";
import Slidesimage9 from "../../assets/asset 15.jpeg";
import Slidesimage10 from "../../assets/asset 16.jpeg";
import Slidesimage11 from "../../assets/asset 17.jpeg";
import Slidesimage12 from "../../assets/asset 18.jpeg";
import "./slides.styles.css";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={Slidesimage1} alt="Slide 1" />
        </div>
        <div className="embla__slide">
          <img src={Slidesimage2} alt="Slide 2" />
        </div>
        <div className="embla__slide">
          <img src={Slidesimage3} alt="Slide 3" />
        </div>
        <div className="embla__slide">
          <img src={Slidesimage4} alt="Slide 4" />
        </div>
        <div className="embla__slide">
          <img src={Slidesimage5} alt="Slide 5" />
        </div>
        <div className="embla__slide">
          <img src={Slidesimage6} alt="Slide 6" />
        </div>
        <div className="embla__slide">
          <img src={Slidesimage7} alt="Slide 7" />
        </div>
        <div className="embla__slide">
          <img src={Slidesimage8} alt="Slide 8" />
        </div>
        <div className="embla__slide">
          <img src={Slidesimage9} alt="Slide 9" />
        </div>
        <div className="embla__slide">
          <img src={Slidesimage10} alt="Slide 10" />
        </div>
        <div className="embla__slide">
          <img src={Slidesimage11} alt="Slide 11" />
        </div>
        <div className="embla__slide">
          <img src={Slidesimage12} alt="Slide 12" />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

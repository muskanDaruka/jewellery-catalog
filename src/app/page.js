import React from "react";
import CustomSlider from "@/components/CatalogSwiper/CustomSlider";
import model1 from '../../public/images/Rings/model1.png'
import model2 from '../../public/images/Rings/model2.png'
import rings6 from '../../public/images/rings6.jpg'
import ring2 from '../../public/images/ring2.jpg'
import necklace1 from '../../public/images/necklace/neckpiece1.jpeg'
import necklace2 from '../../public/images/necklace/neckpiece2.jpeg'
import necklace3 from '../../public/images/necklace/neckpiece3.jpeg'
import necklace4 from '../../public/images/necklace/necklace4.jpg'
import bracelet1 from '../../public/images/bracelet1.jpg'
import bracelet2 from '../../public/images/bracelet2.jpg'
import bracelet3 from '../../public/images/bracelet3.jpg'
import earring1 from '../../public/images/earrings.jpg'
import earring2 from '../../public/images/earring2.png'
import earring3 from '../../public/images/earring3.jpg'
import earring4 from '../../public/images/earring4.jpg'
import pendant from '../../public/images/pendant.jpg'
import pendant1 from '../../public/images/pendant1.jpg'
import pendant3 from '../../public/images/pendant3.jpg'
import pendant4 from '../../public/images/pendant4.jpg'

const Home = () => {
  const slider1Images = [
    { image: model1, url: "/engagement" },
    { image: model2, url: "/engagement" },
    { image: rings6, url: "/engagement" },
    { image: ring2, url: "/engagement" }
  ];

  const slider2Images = [
    { image: necklace1, url: "#" },
    { image: necklace2, url: "#" },
    { image: necklace3, url: "#" },
    { image: necklace4, url: "#" }
  ];

  const slider3Images = [
    { image: bracelet1, url: "#" },
    { image: bracelet2, url: "#" },
    { image: bracelet3, url: "#" },
    { image: bracelet1, url: "#" }
  ];

  const slider4Images = [
    { image: earring1, url: "#" },
    { image: earring2, url: "#" },
    { image: earring3, url: "#" },
    { image: earring4, url: "#" }
  ];

  const slider5Images = [
    { image: pendant, url: "#" },
    { image: pendant1, url: "#" },
    { image: pendant3, url: "#" },
    { image: pendant4, url: "#" }
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div id="rings" className="h-screen snap-start flex items-center justify-center">
        <CustomSlider images={slider1Images} />
      </div>
      <div id="necklace" className="h-screen snap-start flex items-center justify-center">
        <CustomSlider images={slider2Images} />
      </div>
      <div id="bracelets" className="h-screen snap-start flex items-center justify-center">
        <CustomSlider images={slider3Images} />
      </div>
      <div id="earrings" className="h-screen snap-start flex items-center justify-center">
        <CustomSlider images={slider4Images} />
      </div>
      <div id="pendants" className="h-screen snap-start flex items-center justify-center">
        <CustomSlider images={slider5Images} />
      </div>
    </div>
  );
};

export default Home;

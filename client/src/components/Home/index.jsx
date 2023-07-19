import React from "react";
import MainPhoto from "./Home-Components/MainPhoto";
import SliderMain from "./Home-Components/SliderMain";
import Maintain from "./Home-Components/Maintain";
import SliderSecondary from "./Home-Components/SliderSecondary";
import KidsAd from "./Home-Components/KidsAd";
import OurApps from "./Home-Components/OurApps";
import JoinUs from "./Home-Components/JoinUs";
import MoreNike from "./Home-Components/MoreNike";

import FooterCategories from "./Home-Components/FooterCategories";

const Home = () => {
  return (
    <div className="mx-5 min-vh-40">
      <MainPhoto />
      <SliderMain />
      <Maintain />
      <SliderSecondary />
      <KidsAd />
      <OurApps />
      <JoinUs />
      <MoreNike />
      <FooterCategories />
    </div>
  );
};

export default Home;

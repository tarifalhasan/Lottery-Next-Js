import React from 'react';
import HomeSlider from './HomeSlider';
import Campaigns from './Campaigns';

import HowPlay from './HowPlay';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
  return (
    <>
      <HomeSlider />
      <HowPlay />
      <Campaigns />
      <WhyChooseUs />
    </>
  );
};

export default Home;

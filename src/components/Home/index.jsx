import React from 'react';
import Hero from './Hero';

import Campaigns from '../Section/Campaigns';
import Banner from './Banner';
import LiveCampaigns from './LiveCampaigns';
import Winners from './Winners';
import HowPlay from './HowPlay';
import RaffleDraw from './RaffleDraw';

const Home = () => {
  return (
    <>
      <Hero />
      <RaffleDraw />
      <Campaigns bg={'bg-transparent'} btnHide="hidden" />
      <Banner />
      <LiveCampaigns />
      <Winners />
      <HowPlay />
    </>
  );
};

export default Home;

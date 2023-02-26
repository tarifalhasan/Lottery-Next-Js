import { useState, useEffect } from 'react';
import Hero from './Hero';

import Campaigns from '../Section/Campaigns';
import Banner from './Banner';
import LiveCampaigns from '@/components/Section/LiveCampaigns';
import Winners from './Winners';
import HowPlay from './HowPlay';
import RaffleDraw from '@/components/Section/RaffleDraw';

const Home = () => {
  const [Products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchProducts() {
      const res = await fetch('/api/products');
      const json = await res.json();
      setProducts(json);
      setLoading(false);
    }
    fetchProducts();
  }, []);
  const getSigleDate = Products?.map(date => date.campaignEndDate);
  return (
    <>
      <Hero />
      <RaffleDraw />
      <Campaigns bg={'bg-transparent'} data={Products} btnHide="hidden" />
      <Banner />
      <LiveCampaigns
        daysToAdd={getSigleDate}
        data={Products}
        paddingTop="pt-20"
        slugProduct="/products"
      />
      <Winners />
      <HowPlay />
    </>
  );
};

export default Home;

import LiveCampaigns from '@/components/Section/LiveCampaigns';
import CampaignHero from '@/components/Section/CampaignHero';
import { useState, useEffect } from 'react';
const Campaigns = () => {
  const [Products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products');
      const json = await res.json();
      setProducts(json);
    }
    fetchProducts();
  }, []);
  return (
    <>
      <CampaignHero />
      <LiveCampaigns data={Products} paddingTop={'pt-24'} />
    </>
  );
};

export default Campaigns;

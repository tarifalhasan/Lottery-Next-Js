import { useState, useEffect } from 'react';
import Campaigns from '@/components/Section/Campaigns';
import LiveCampaigns from '@/components/Section/LiveCampaigns';
const Produts = () => {
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

  return (
    <div className="main-container">
      <Campaigns btnBg={'bg-[#01A8FF]'} data={Products} />
      <LiveCampaigns />
    </div>
  );
};

export default Produts;

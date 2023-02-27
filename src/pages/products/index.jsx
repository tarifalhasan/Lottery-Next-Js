import { useState, useEffect } from 'react';
import Campaigns from '@/components/Section/Campaigns';
import LiveCampaigns from '@/components/Section/LiveCampaigns';
import useFetcher from '@/lib/fetcher';
const Produts = () => {
  const { data, isLoading, isError } = useFetcher('products');

  return (
    <div className="main-container">
      <Campaigns
        btnBg={'bg-[#01A8FF]'}
        slugProduct="/products"
        data={data}
        isError={isError}
        isLoading={isLoading}
      />
      <LiveCampaigns data={data} />
    </div>
  );
};

export default Produts;

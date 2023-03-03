import { useState, useEffect } from 'react';
import Campaigns from '@/components/Section/Campaigns';
import LiveCampaigns from '@/components/Section/LiveCampaigns';
import useFetcher from '@/lib/fetcher';
import Layout from '@/components/Layout/Layout';
const Produts = () => {
  const { data, isLoading, isError } = useFetcher('products');

  return (
    <Layout>
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
    </Layout>
  );
};

export default Produts;

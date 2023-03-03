import { useState, useEffect } from 'react';
import Campaigns from '@/components/Section/Campaigns';
import LiveCampaigns from '@/components/Section/LiveCampaigns';
import useFetcher from '@/lib/fetcher';
import Layout from '@/components/Layout/Layout';
const Produts = ({ products }) => {
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

// export async function getStaticProps() {
//   const res = await fetch(`http://localhost:3000/api/products`);
//   const data = await res.json();
//   return {
//     props: {
//       products: data,
//     },
//   };
// }

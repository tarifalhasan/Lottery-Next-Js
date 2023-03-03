import LiveCampaigns from '@/components/Section/LiveCampaigns';
import CampaignHero from '@/components/Section/CampaignHero';
import Layout from '@/components/Layout/Layout';
import useFetcher from '@/lib/fetcher';
const Campaigns = () => {
  const { data, isError, isLoading } = useFetcher('products');
  return (
    <Layout>
      <CampaignHero />
      <LiveCampaigns
        slugProduct="/products"
        isLoading={isLoading}
        isError={isError}
        data={data}
        paddingTop={'pt-24'}
      />
    </Layout>
  );
};

export default Campaigns;

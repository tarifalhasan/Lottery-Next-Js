import LiveCampaigns from '@/components/Section/LiveCampaigns';
import CampaignHero from '@/components/Section/CampaignHero';
import useFetcher from '@/lib/fetcher';
const Campaigns = () => {
  const { data, isError, isLoading } = useFetcher('products');
  return (
    <>
      <CampaignHero />
      <LiveCampaigns
        slugProduct="/products"
        isLoading={isLoading}
        isError={isError}
        data={data}
        paddingTop={'pt-24'}
      />
    </>
  );
};

export default Campaigns;

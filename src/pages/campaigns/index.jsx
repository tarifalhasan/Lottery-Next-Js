import LiveCampaigns from '@/components/Section/LiveCampaigns';
import CampaignHero from '@/components/Section/CampaignHero';
import Layout from '@/components/Layout/Layout';

const Campaigns = ({ products, isLoding, isError }) => {
  return (
    <Layout>
      <CampaignHero />
      <LiveCampaigns
        slugProduct="/products"
        isLoading={isLoding}
        isError={isError}
        data={products}
        paddingTop={'pt-24'}
      />
    </Layout>
  );
};

export default Campaigns;

export async function getServerSideProps(context) {
  const baseUrl = process.env.BASE_URL;
  let products = [];
  let isError = false;
  let isLoding = true;

  try {
    const res = await fetch(`${baseUrl}/api/products`);
    products = await res.json();
  } catch (error) {
    isError = true;
  } finally {
    isLoding = false;
  }

  return {
    props: {
      products: products,
      isLoding: isLoding,
      isError: isError,
    },
  };
}

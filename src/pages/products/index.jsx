import Campaigns from '@/components/Section/Campaigns';
import LiveCampaigns from '@/components/Section/LiveCampaigns';
import baseUrl from '@/helper/baseUri';
import Layout from '@/components/Layout/Layout';
const Produts = ({ products, isLoding, isError }) => {
  return (
    <Layout>
      <div className="main-container">
        <Campaigns
          btnBg={'bg-[#01A8FF]'}
          slugProduct="/products"
          data={products}
          isError={isError}
          isLoading={isLoding}
        />
        <LiveCampaigns data={products} />
      </div>
    </Layout>
  );
};

export default Produts;

export async function getServerSideProps(context) {
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

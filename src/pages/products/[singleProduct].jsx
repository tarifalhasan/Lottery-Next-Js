import CampaignEnds from '@/components/ui/CampaignEnds';
import NumberOfProduct from '@/components/ui/NumberOfProduct';
import AddToCartBtn from '@/components/ui/AddToCartBtn';
import Image from 'next/image';
import Link from 'next/link';
import LiveCampaigns from '@/components/Section/LiveCampaigns';
import Ticket from '@/components/Section/Ticket';
import getProducts from '@/lib/api/products';
import Layout from '@/components/Layout/Layout';

const SingleProduct = ({ product, products, isError, isLoading }) => {
  return (
    <Layout>
      {' '}
      <div className="main-container lg:px-10">
        <div className="flex flex-col items-center gap-4 lg:flex-row gap-y-3 pt-10">
          <div className="basis-[50%]">
            <h2 className="text-[2.8em] leading-[190%] text-[#464848]">
              {product.name || 'unknown product'}
            </h2>
            <div className="w-full lg:w-[70%]">
              <CampaignEnds daysToAdd={product?.campaign} />
            </div>

            <div className="bg-[#01A8FF0D] rounded-xl p-6 mt-10">
              <Ticket />
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-10 items-center">
              <NumberOfProduct price={product?.price || 'unknown product'} />
              <AddToCartBtn />
            </div>
          </div>
          <div className="bg-[#F6F6F6] basis-[50%]  pt-3 w-full px-4 lg:px-16 my-10 lg:mt-32 rounded-[15px]">
            <Image
              src={product.mediaUrl || '/'}
              alt={product.name || 'unknown product'}
              width={400}
              height={400}
              className="block mx-auto py-16"
            />
          </div>
        </div>
        <div>
          <h3 className="text-[#464848] leading-[130%] font-semibold text-[1.4em]">
            Product Details
          </h3>
          <article className="text-[#434648] py-2 font-normal leading-[160%] text-[1.3em]">
            {product?.description || 'Unknown Product'}
          </article>
          <Link
            className="text-lg font-normal text-[#000] leading-[140%]"
            href="/"
          >
            Read More +
          </Link>
        </div>
        {/* Live campaign */}
        <LiveCampaigns
          slugProduct="/products"
          isError={isError}
          isLoading={isLoading}
          data={products}
        />
      </div>
    </Layout>
  );
};

export default SingleProduct;

// Get Server Side Props

// Get One Product
export async function getServerSideProps({ query }) {
  const { singleProduct } = query;
  const baseUrl = process.env.BASE_URL;
  let data = {};
  let products = [];
  let isError = false;
  let isLoading = true;
  try {
    const res = await fetch(`${baseUrl}/api/products/${singleProduct}`);
    data = await res.json();
    products = await getProducts();
  } catch (error) {
    isError = true;
  } finally {
    isLoading = false;
  }
  return {
    props: {
      product: data,
      products: products,
      isError: isError,
      isLoading: isLoading,
    },
  };
}

// Get all Products

// Get Statics Props
// export async function getStaticProps({ params }) {
//   const product = await getProducts(params.singleProduct);
//   return {
//     props: {
//       product, // pass product object as a property of the props object
//     },
//   };
// }

// // Generates `/products/[singleProduct]` for each product post
// export async function getStaticPaths() {
//   const products = await getProducts();
//   const paths = products.map(value => {
//     return {
//       params: {
//         singleProduct: value.slug, // change `product` to `singleProduct`
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

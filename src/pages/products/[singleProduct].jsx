import CampaignEnds from '@/components/ui/CampaignEnds';
import NumberOfProduct from '@/components/ui/NumberOfProduct';
import AddToCartBtn from '@/components/ui/AddToCartBtn';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LiveCampaigns from '@/components/Section/LiveCampaigns';
const SingleProduct = () => {
  const [Product, setProduct] = useState();
  const [Products, setProducts] = useState();

  const [isLoading, setLoading] = useState(false);
  // console.log(Product);
  const router = useRouter();
  const { singleProduct } = router.query;
  useEffect(() => {
    setLoading(true);
    async function fetchProducts() {
      const res = await fetch('/api/products');
      const Products = await res.json();
      setProducts(Products);
      const product = Products?.find(p => p.slug === singleProduct);

      setProduct(product);
    }
    fetchProducts();
  }, [singleProduct]);

  return (
    <div className="main-container lg:px-10">
      <div className="flex flex-col lg:flex-row gap-y-3 pt-10">
        <div className="basis-[60%]">
          <h2 className="text-[2.8em] leading-[190%] text-[#464848]">
            {Product?.title}
          </h2>
          <div className="w-full lg:w-[65%]">
            <CampaignEnds daysToAdd={Product?.campaignEndDate} />
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-10 items-center">
            <NumberOfProduct price={Product?.price} />
            <AddToCartBtn />
          </div>
        </div>
        <div className="bg-[#F6F6F6] basis-[40%] px-16 mt-10 rounded-[15px]">
          <Image
            src={Product?.productImage.src}
            alt={Product?.title}
            width={300}
            height={300}
            className="block mx-auto py-20"
          />
        </div>
      </div>
      <div>
        <h3 className="text-[#464848] leading-[130%] font-semibold text-[1.4em]">
          Product Details
        </h3>
        <article className="text-[#434648] py-2 font-normal leading-[160%] text-[1.3em]">
          {Product?.descripetion}
        </article>
        <Link
          className="text-lg font-normal text-[#000] leading-[140%]"
          href="/"
        >
          Read More +
        </Link>
      </div>
      {/* Live compaign */}
      <LiveCampaigns slugProduct="/products" data={Products} />
    </div>
  );
};
export default SingleProduct;

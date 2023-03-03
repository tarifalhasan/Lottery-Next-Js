import HomeSlider from '@/components/Section/HomeSlider';
import Campaigns from '@/components/Section/Campaigns';
import Layout from '@/components/Layout/Layout';
import whyUsImage from '@/../public/images/why-us.svg';
import HowPlay from '@/components/Section/HowPlay';
import WhyChooseUs from '@/components/Section/WhyChooseUs';
import { useState, useEffect } from 'react';
const WhyUs = () => {
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
    <Layout>
      <HomeSlider img={whyUsImage} />
      <HowPlay />
      <Campaigns
        data={Products}
        btnBg="#fff"
        bg={'bg-bgCyan'}
        headingColor="text-[#fff]"
        slugProduct="/products"
      />
      <WhyChooseUs />
    </Layout>
  );
};

export default WhyUs;

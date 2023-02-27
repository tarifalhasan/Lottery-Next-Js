import HomeSlider from '../Section/HomeSlider';
import Campaigns from '../Section/Campaigns';
import Banner from './Banner';
import LiveCampaigns from '@/components/Section/LiveCampaigns';
import Winners from './Winners';
import HowPlay from './HowPlay';
import HeroImage from '../../../public/images/hero.svg';
import RaffleDraw from '@/components/Section/RaffleDraw';

import useFetcher from '@/lib/fetcher';

const Home = () => {
  const { data, isLoading, isError } = useFetcher('products');

  const getSigleDate = data?.map(date => date.campaignEndDate);
  return (
    <>
      <HomeSlider img={HeroImage} />
      <RaffleDraw />
      <Campaigns
        slugProduct="/products"
        bg={'bg-transparent'}
        data={data}
        btnHide="hidden"
        isLoading={isLoading}
        isError={isError}
      />
      <Banner />
      <LiveCampaigns
        daysToAdd={getSigleDate}
        data={data}
        paddingTop="pt-20"
        slugProduct="/products"
        isLoading={isLoading}
        isError={isError}
      />
      <Winners />
      <HowPlay />
    </>
  );
};

export default Home;

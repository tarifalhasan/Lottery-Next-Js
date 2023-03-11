import HomeSlider from '../Section/HomeSlider';
import Campaigns from '../Section/Campaigns';
import Banner from './Banner';
import LiveCampaigns from '@/components/Section/LiveCampaigns';
import Winners from './Winners';
import HowPlay from './HowPlay';
import HeroImage from '../../../public/images/hero.svg';
import RaffleDraw from '@/components/Section/RaffleDraw';

const MainPage = ({ products, isLoding, isError }) => {
  return (
    <>
      <HomeSlider img={HeroImage} />
      <RaffleDraw />
      <Campaigns
        slugProduct="/products"
        bg={'bg-transparent'}
        data={products}
        btnHide="hidden"
        isLoading={isLoding}
        isError={isError}
      />
      <Banner />
      <LiveCampaigns
        data={products}
        paddingTop="pt-20"
        slugProduct="/products"
        isLoading={isLoding}
        isError={isError}
      />
      <Winners />
      <HowPlay />
    </>
  );
};

export default MainPage;

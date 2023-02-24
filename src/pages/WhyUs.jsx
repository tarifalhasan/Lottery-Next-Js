import HomeSlider from '../components/Section/HomeSlider';
import Campaigns from '../components/Section/Campaigns';
import whyUsImage from '../../public/images/why-us.svg';
import HowPlay from '../components/Section/HowPlay';
import WhyChooseUs from '../components/Section/WhyChooseUs';

const WhyUs = () => {
  return (
    <>
      <HomeSlider img={whyUsImage} />
      <HowPlay />
      <Campaigns bg={'bg-bgCyan'} />
      <WhyChooseUs />
    </>
  );
};

export default WhyUs;

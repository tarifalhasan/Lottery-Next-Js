import DesktopImage from '@/../public/images/dekstop.svg';

const data = [
  {
    title: 'Apple macbook pro m2',
    price: '$65.35',
    tarif: 'tarif',
    productImage: DesktopImage,
    campaignEndDate: 5,
    descripetion: `Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make a type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.`,

    slug: 'apple-macbook-pro-m2',
  },
  {
    title: 'Apple macbook pro m2',
    price: '$65.35',
    tarif: 'tarif',
    productImage: DesktopImage,
    campaignEndDate: 6,
    descripetion: `Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make a type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.`,

    slug: 'apple-macbook-pro-m2',
  },
  {
    title: 'Apple macbook pro air',
    price: '$75.35',
    tarif: 'tarif',
    productImage: DesktopImage,
    campaignEndDate: 14,
    descripetion: `Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make a type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.`,

    slug: 'apple-macbook-pro-air',
  },
  {
    title: 'Apple macbook pro tarif',
    price: '$3615.35',
    tarif: 'tarif',
    productImage: DesktopImage,
    campaignEndDate: 16,
    descripetion: `Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make a type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.`,

    slug: 'apple-macbook-pro-tarif',
  },
];

// Calculate the time remaining for each product in days, hours, minutes, and seconds

export default function handler(req, res) {
  res.status(200).json(data);
}

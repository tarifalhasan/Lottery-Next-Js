// hit url api/

const baseUrl = 'https://lottery-next-js-ecommerce.vercel.app';

const getProducts = async () => {
  const res = await fetch(`${baseUrl}/api/products`);
  const data = await res.json();

  return data;
};
export default getProducts;

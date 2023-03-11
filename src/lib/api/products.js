// hit url api/
import baseUrl from '@/helper/baseUri';

const getProducts = async () => {
  const res = await fetch(`${baseUrl}/api/products`);
  const data = await res.json();

  return data;
};
export default getProducts;

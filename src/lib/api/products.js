// hit url api/

const baseUrl = process.env.BASE_URL;

const getProducts = async () => {
  const res = await fetch(`${baseUrl}/api/products`);
  const data = await res.json();

  return data;
};
export default getProducts;

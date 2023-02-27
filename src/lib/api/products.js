// hit url api/
const getProducts = async slug => {
  const res = await fetch(`api/products`);
  const data = await res.json();
  // get one data
  if (slug) {
    return data.find(data => data.slug === slug);
  }
  return data;
};
export default getProducts;

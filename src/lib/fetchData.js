const productUrl = 'http://localhost:3000/api/products';
// hit url api/
export async function getProducts(slug) {
  const res = await fetch(`${productUrl}`);
  const data = await res.json();
  // get one data
  if (slug) {
    return data.find(data => data.slug === slug);
  }
  return data;
}
// hit url api/blogs

const blogUrl = 'http://localhost:3000/api/blogs';
export async function getBlogs(slug) {
  const res = await fetch(`${blogUrl}`);
  const post = await res.json();

  if (slug) {
    return post.find(post => post.slug === slug);
  }
  return post;
}

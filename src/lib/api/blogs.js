const getBlogs = async slug => {
  const baseUrl = 'https://lottery-next-js-ecommerce.vercel.app';
  const res = await fetch(`${baseUrl}/api/blogs`);
  const post = await res.json();

  if (slug) {
    return post.find(post => post.slug === slug);
  }
  return post;
};
export default getBlogs;

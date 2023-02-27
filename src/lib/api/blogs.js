const blogUrl = '/api/blogs';
const getBlogs = async slug => {
  const res = await fetch(`${blogUrl}`);
  const post = await res.json();

  if (slug) {
    return post.find(post => post.slug === slug);
  }
  return post;
};
export default getBlogs;

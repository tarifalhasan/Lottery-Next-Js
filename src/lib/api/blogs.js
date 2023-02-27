const getBlogs = async slug => {
  const res = await fetch(`https://lottery-next-js.vercel.app/api/blog`);
  const post = await res.json();

  if (slug) {
    return post.find(post => post.slug === slug);
  }
  return post;
};
export default getBlogs;

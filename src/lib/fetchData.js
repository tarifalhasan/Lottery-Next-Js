// fetch blog post data from api
const baseUrl = 'api/blog';
const getBlogs = async ({ slug }) => {
  const response = await fetch(`${baseUrl}`);
  const data = await response.json();

  return data;
};

export default getBlogs;

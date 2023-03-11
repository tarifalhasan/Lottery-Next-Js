const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://tarifecommerce.vercel.app'
    : 'http://localhost:3000';
export default baseUrl;

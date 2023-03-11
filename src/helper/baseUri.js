const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://Lottery-Next-Js.vercel.app'
    : 'http://localhost:3000';
export default baseUrl;

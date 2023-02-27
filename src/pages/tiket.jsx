import getProducts from '@/lib/fetchData';

export default function tiket() {
  getProducts('apple-macbook-pro-m2').then(p => console.log(p));
  return <div>tiket</div>;
}

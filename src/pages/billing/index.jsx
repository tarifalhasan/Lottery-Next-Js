import Layout from '@/components/Layout/Layout';
import Navigation from '../account/Navigation';
import Carts from './Carts';
import Table from './Table';

const Billing = () => {
  return (
    <Layout>
      <section className="main-container px-0">
        <Navigation />

        <main className="py-10 gap-6 flex flex-col lg:flex-row  px-6 ">
          <div className="basis-[40%] flex-col flex gap-6 w-full lg:w-auto">
            <Carts />
          </div>
          <div className="basis-[60%] w-full lg:w-auto">
            <Table />
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default Billing;

import Link from 'next/link';
const Dashboard = props => {
  return (
    <div className="main-container">
      <Link
        className="block w-60 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        href={{
          pathname: 'dashboard/[product]',
          query: { product: 'product' },
        }}
      >
        Products Page
      </Link>
      <br />
      <Link
        className="block w-60 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        // href={{
        //   pathname: 'dashboard/[product]',
        //   query: { product: 'product' },
        // }}
        href={'products'}
      >
        Blog Page
      </Link>
    </div>
  );
};

export default Dashboard;

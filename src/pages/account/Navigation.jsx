import { useRouter } from 'next/router';
import Link from 'next/link';

const Navigation = () => {
  const router = useRouter();

  const isActiveLink = href => {
    return router.pathname === href ? 'bg-white' : '';
  };
  return (
    <div className="pt-16 pb-8 flex ">
      <div className="flex basis-[100%] lg:basis-[45%] col-span-4 justify-between items-center  account_overview_btn_wrap px-4 py-2">
        <Link href="/account">
          <span
            className={`block px-2 lg:px-8 rounded-lg py-2 text-base ${isActiveLink(
              '/account'
            )}`}
          >
            Overview
          </span>
        </Link>
        <Link href="/billing">
          <span
            className={`block px-4 rounded-lg py-2 text-[1em] ${isActiveLink(
              '/billing'
            )}`}
          >
            Billing and Transactions
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Navigation;

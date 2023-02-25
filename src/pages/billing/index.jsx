import Image from 'next/image';
import Navigation from '../account/Navigation';
import visa from '@/../public/images/visa.svg';
import { CiEdit } from 'react-icons/ci';
const Billing = () => {
  return (
    <section className="main-container px-0 lg:px-16">
      <Navigation />

      <main className="py-10 px-6 grid grid-cols-12">
        <div className="col-span-5">
          <div className="add_new_cart">
            <div className="flex">
              <div className="grid grid-cols-12 gap-x-3 justify-between">
                <div className="col-span-2">
                  <div className="card_Img px-4 py-2 border border-border">
                    <Image
                      src={visa}
                      alt="add to cart"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="card_detail col-span-8">
                  <h3 className="text-[1.3em] text-[#1F272D]">
                    Visa ending in 1250
                  </h3>
                  <span className="text-[13px] text-[#1F272DB2]">
                    Expire 05/2024
                  </span>
                  <button className="flex cursor-pointer items-center justify-between">
                    <span>Set as default</span>
                    <span className="bg-[#A1A8AE1A] flex items-center px-1 py-1 rounded-md">
                      <CiEdit />
                      Edit
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7">2</div>
      </main>
    </section>
  );
};

export default Billing;

import Image from 'next/image';
import Navigation from './Navigation';
import vector from '@/../public/images/Profile.svg';
import { BsFillCheckCircleFill } from 'react-icons/bs';
const Account = () => {
  return (
    <section className="main-container px-0 lg:px-16">
      <Navigation />
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-10">
          <div className="col-span-3">
            <div className="profile_image flex flex-col items-center gap-y-4">
              <Image
                alt="tarifalhasan"
                className="rounded-full"
                src={vector}
                width={120}
                height={120}
              />
              <div className="btn_group flex gap-x-2 items-center">
                <button className="btn_rounded">Edit</button>
                <button className="btn_rounded">Save</button>
              </div>
            </div>
          </div>
          <div className="col-span-7 px-5 lg:px-10 mt-16">
            <form action="post">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="frist_name"
                  placeholder="First Name"
                  className="bg-[#F6F6F6] block outline-none py-4 lg:py-3 pl-3 pr-10  rounded-[5px] text-[#1F272D] text-[1em]"
                />
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  className="bg-[#F6F6F6] block outline-none py-4 lg:py-3 pl-3 pr-10  rounded-[5px] text-[#1F272D] text-[1em]"
                  required
                />
                <input
                  type="text"
                  name="Last Name"
                  placeholder="Last Name"
                  className="bg-[#F6F6F6] block outline-none py-4 lg:py-3 pl-3 pr-10  rounded-[5px] text-[#1F272D] text-[1em]"
                  required
                />

                <input
                  type="text"
                  name="town"
                  placeholder="Town"
                  className="bg-[#F6F6F6] block outline-none py-4 lg:py-3 pl-3 pr-10  rounded-[5px] text-[#1F272D] text-[1em]"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="bg-[#F6F6F6] block outline-none py-4 lg:py-3 pl-3 pr-10  rounded-[5px] text-[#1F272D] text-[1em]"
                  required
                />
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  className="bg-[#F6F6F6] block outline-none py-4 lg:py-3 pl-3 pr-10  rounded-[5px] text-[#1F272D] text-[1em]"
                  required
                />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  className="bg-[#F6F6F6] block outline-none py-4 lg:py-3 pl-3 pr-10  rounded-[5px] text-[#1F272D] text-[1em]"
                  required
                />
                <ul className="flex flex-row md:flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <BsFillCheckCircleFill
                      size={20}
                      className="text-[#02BC7D]"
                    />
                    <span className="block text-[1em] text-[#1F272D]">
                      Promotional Emails
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BsFillCheckCircleFill
                      size={20}
                      className="text-[#02BC7D]"
                    />
                    <span className="block text-[1em] text-[#1F272D]">
                      Promotional SMS
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-4 py-10 w-full md:max-w-[60%] mx-auto justify-around">
                <button className="btn_rounded">Edit</button>
                <button className="btn_rounded">Save</button>
                <button className="btn_rounded">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;

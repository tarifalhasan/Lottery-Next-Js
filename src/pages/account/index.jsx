import Image from 'next/image';
import Navigation from './Navigation';
import vector from '@/../public/images/Profile.svg';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Input from '@/components/ui/Input';
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
                <Input name="frist_name" type="text" placeholder="First Name" />

                <Input name="Address" type="text" placeholder="Address" />

                <Input name="Last Name" type="text" placeholder="Last Name" />

                <Input name="town" type="text" placeholder="Town" />

                <Input name="Email" type="email" placeholder="Email" />

                <Input name="postcode" type="text" placeholder="Postcode" />

                <Input name="password" type="password" placeholder="Password" />

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

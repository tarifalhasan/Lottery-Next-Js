import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useSelector } from 'react-redux';
import { navLinks } from '../data/data';
const Navbar = () => {
  let Carts = useSelector(cart => cart);

  return (
    <div className="w-full hidden lg:block bg-[#0085FF] ">
      <div className="main-container py-5">
        <div className="flex justify-between">
          <div className="flex self-center">
            <Link href={'/'}>Logo</Link>
          </div>
          <div className="flex self-center gap-x-16">
            {navLinks.map((link, key) => (
              <Link key={key} href={link.link} className="nav-link">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex self-center gap-x-4">
            <div className="flex gap-x-3.5">
              <Image
                src="/images/cartwhite.svg"
                alt=""
                width={27}
                height={27}
              />
              <Image src="/images/insta.svg" alt="" width={27} height={27} />
            </div>
            <div className="flex gap-x-1">
              <Link href={'/register'}>
                <span className="bg-[#010567] flex self-center border border-transparent px-7 py-2.5 text-white ">
                  Register
                </span>
              </Link>
              <Link href={'/signin'}>
                <span className="text-white flex self-center border border-white px-7 py-2.5">
                  Sign In
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

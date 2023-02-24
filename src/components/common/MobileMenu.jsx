import React from 'react';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Image from 'next/image';
import HamburgerIcon from '../../../public/images/hamburgeicon.svg';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <div className="w-full   lg:hidden bg-[#0085FF]">
      <div className="flex justify-between px-4 py-4">
        <div className="flex self-center">
          <Link href={'/'}>Logo</Link>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-x-4">
            <Image src="/images/cartwhite.svg" alt="" width={25} height={25} />
            <Image src="/images/insta.svg" alt="" width={25} height={25} />
          </div>
          <span
            className="flex self-center cursor-pointer"
            onClick={toggleDrawer}
          >
            <Image src={HamburgerIcon} alt="" />
          </span>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{
          background:
            ' linear-gradient(180deg, #0085FF 22.2%, rgba(0, 133, 255, 0) 100%)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <div className="py-7 px-4">
          <div className="mb-5">
            <Link href={'/'}>Logo</Link>
          </div>
          <div className="flex flex-col gap-4 mb-5">
            <Link href={'/'}>
              <span className="nav-link">Home</span>
            </Link>
            <Link href={'/'}>
              <span className="nav-link">Campaigns</span>
            </Link>
            <Link href={'/'}>
              <span className="nav-link">Winners</span>
            </Link>
            <Link href={'/'}>
              <span className="nav-link"> Why Us</span>
            </Link>
            <Link href={'/'}>
              <span className="nav-link">Blog</span>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link href={'/'}>
              <span className="bg-[#010567] w-full flex justify-center border border-transparent px-7 py-2.5 text-white ">
                Register
              </span>
            </Link>
            <Link href={'/'}>
              <span className="text-white w-full flex justify-center border border-white px-7 py-2.5">
                Sign In
              </span>
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;

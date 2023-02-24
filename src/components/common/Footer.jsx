import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="main-container bg-transparent">
      <div className="py-10">
        <div className=" flex flex-col gap-6 lg:grid grid-cols-12">
          <div className="col-span-3">
            <Link href={'/'}>
              <span className="text-xl block mb-7">Logo</span>
            </Link>
            <div className="flex gap-x-1">
              <Image src="/images/paypal.svg" alt="" width={40} height={40} />
              <Image src="/images/visa.svg" alt="" width={40} height={40} />
              <Image src="/images/amex.svg" alt="" width={40} height={40} />
              <Image
                src="/images/mastercard.svg"
                alt=""
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="col-span-9 gap-y-8 grid grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="footer-links-title">Quick Links</h2>
              <div className="flex flex-col gap-5">
                <Link href={'/'}>
                  <span className="footer-link">Home</span>
                </Link>
                <Link href={'/'}>
                  <span className="footer-link">Campaigns</span>
                </Link>
                <Link href={'/'}>
                  <span className="footer-link">Why Us</span>
                </Link>
                <Link href={'/'}>
                  <span className="footer-link">Blog</span>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="footer-links-title">Company</h2>
              <div className="flex flex-col gap-5">
                <Link href={'/'}>
                  <span className="footer-link">FAQs</span>
                </Link>
                <Link href={'/'}>
                  <span className="footer-link">My Account</span>
                </Link>
                <Link href={'/'}>
                  <span className="footer-link">Sitemap</span>
                </Link>
                <Link href={'/'}>
                  <span className="footer-link">Winners</span>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="footer-links-title">Blog</h2>
              <div className="flex flex-col gap-5">
                <Link href={'/'}>
                  <span className="footer-link">Titles of Latest Blogs</span>
                </Link>
                <Link href={'/'}>
                  <span className="footer-link">High Frequency Compute</span>
                </Link>
                <Link href={'/'}>
                  <span className="footer-link">Bare Metal</span>
                </Link>
                <Link href={'/'}>
                  <span className="footer-link">Object Storage</span>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="footer-links-title">Contact us</h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-x-2">
                  <Image src="/images/map.svg" alt="" width={40} height={40} />
                  <span className="footer-link">
                    1029 Finchley Road, London, NW117ES
                  </span>
                </div>
                <div className="flex gap-x-2">
                  <Image
                    src="/images/phone.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <span className="footer-link">hello@prizepursuit.com</span>
                </div>
                <div className="flex gap-x-2">
                  <Image src="/images/mail.svg" alt="" width={40} height={40} />
                  <span className="footer-link">020 8050 0018</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-6 pb-3 flex flex-col-reverse md:flex-row-reverse  gap-10 ">
        <div className="flex justify-between gap-2 md:gap-x-5">
          <Link href={'/'}>
            <span className="footer-link">Terms & Conditions</span>
          </Link>
          <Link href={'/'}>
            <span className="footer-link">Privacy policy</span>
          </Link>
        </div>
        <p className="footer-link text-center md:text-left">
          © 2023 Prize Pursuit, All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

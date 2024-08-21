import Link from 'next/link';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import Logo from './Logo';

export const linkIconStyle = 'p-2 bg-white text-primary rounded-full';

const FooterSection = () => {
  const listItemStyle = 'font-light my-4 text-gray-200';

  return (
    <section className='bg-primary'>
      <div className='p-8 lg:px-16 xl:px-32 pt-16 pb-16 grid items-start gap-12 sm:gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-b border-b-primary-4'>
        {/* Column 1 */}
        <div>
          <Link href='/' className='mb-8 inline-block'>
            <Logo />
          </Link>
          <div>
            <p className='mb-4 font-semibold text-white'>Follow Us</p>
            <div className='flex items-center gap-2'>
              <a
                target='_blank'
                href='https://instagram.com/vviprentals_cpt'
                className={linkIconStyle}
              >
                <AiFillInstagram />
              </a>
              {/* <Link href='' className={linkIconStyle}>
                <FaXTwitter />
              </Link>
              <Link href='' className={linkIconStyle}>
                <FaLinkedin />
              </Link>

              <Link href='' className={linkIconStyle}>
                <FaFacebookF />
              </Link> */}
            </div>
          </div>
        </div>
        {/* Column 1 */}
        <div className='text-white'>
          <p className='mb-6 font-semibold text text-xl md:text-2xl'>Company</p>
          <ul className='font-light'>
            <li className={listItemStyle}>
              <Link href='/'>Home</Link>
            </li>
            <li className={listItemStyle}>
              <Link href='/#about'>About Us</Link>
            </li>
            <li className={listItemStyle}>
              <Link href='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* Column 2 */}
        <div className='text-white'>
          <p className='mb-6 font-semibold text text-xl md:text-2xl'>
            Vehicles
          </p>
          <ul className='font-light'>
            <li className={listItemStyle}>
              <Link href='/#maybach-GLS-600-FL'>Maybach GLS 600 FL</Link>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        {/* <div className='text-white'>
          <p className='mb-6 font-semibold text text-xl md:text-2xl'>Legal</p>
          <ul className='font-light'>
            <li className={listItemStyle}>
              <Link href='/terms'>Terms of Use</Link>
            </li>
            <li className={listItemStyle}>
              <Link href='/terms'>Privacy Policy</Link>
            </li>
            <li className={listItemStyle}>
              <Link href='/terms'>Cookie Policy</Link>
            </li>
          </ul>
        </div> */}
        {/* Column 4 */}
        <div className='text-white col-span-2'>
          <p className='mb-6 font-semibold text-xl md:text-2xl'>Address:</p>
          <div className='grid sm:grid-cols-2 gap-8'>
            <div>
              <p className='mb-4 font-medium text-lg md:text-xl'>
                South Africa
              </p>
              <p className='font-light'> . . .</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='p-8 lg:px-16 xl:px-32 pt-16 pb-16'>
        <p className='text-center text-gray-400'>
          VVIP Rentals &copy; {new Date().getUTCFullYear()} All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default FooterSection;

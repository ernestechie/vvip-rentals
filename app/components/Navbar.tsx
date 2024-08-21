'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IoCloseSharp, IoMenuSharp } from 'react-icons/io5';
import Logo from './Logo';

interface LinkType {
  _id: string;
  name: string;
  url: string;
}

const links: LinkType[] = [
  { _id: '01', name: 'Home', url: '/' },
  { _id: '02', name: 'About Us', url: '#about' },
  { _id: '03', name: 'Contact', url: '/contact' },
];

const appURL = process.env.NEXT_PUBLIC_APP_URL || '';

const Navbar = () => {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);

  const getActivePage = (route: string) => {
    return route.toLowerCase() === pathname;
  };

  const openNavigation = () => setModalOpen(true);
  const closeNavigation = () => setModalOpen(false);

  function validateLink(linkType: string) {
    if (typeof window !== 'undefined') {
      const userRole = localStorage.getItem('role') as string;

      if (linkType === 'all') {
        return true;
      }
      if (linkType === userRole) {
        return true;
      }
    }
  }

  return (
    <nav className='p-4 bg-primary-5 flex items-center justify-between lg:px-16 xl:px-32 fixed top-0 left-0 w-screen z-50'>
      {/* Navbar Logo */}
      <Link href='/'>
        <Logo />
      </Link>

      {/* Navbar Links */}
      <ul className='hidden lg:flex items-center gap-16'>
        {links.map((link) => (
          <li key={link._id}>
            <Link href={link.url} className='text-white font-semibold texg-lg'>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Navbar Buttons */}
      <div className='gap-4 flex'>
        {/* Navbar Buttons */}
        <button
          className='block ml-8 text-4xl p-0 text-white lg:hidden'
          onClick={openNavigation}
        >
          <IoMenuSharp />
        </button>
      </div>
      {/* Mobile Navbar */}
      <div
        className={`block lg:hidden fixed w-screen h-screen left-0 top-0 bg-primary p-8 z-50 duration-500 ${
          modalOpen ? 'translate-y-0' : '-translate-y-[100%]'
        }`}
      >
        <div className='flex items-center gap-8 justify-between'>
          <Link href='/'>
            <Logo />
          </Link>
          <button
            className='block text-4xl p-0 text-white'
            onClick={closeNavigation}
          >
            <IoCloseSharp />
          </button>
        </div>
        {/* Navbar Links */}
        <ul className='items-center gap-8 flex-col mt-16'>
          {links.map((link) => (
            <li key={link._id} className='block my-8'>
              <Link
                href={link.url}
                className='p-3 duration-500 text-xl font-semibold text-white'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='fixed left-0 top-0 bg-white'></div>
    </nav>
  );
};

export default Navbar;

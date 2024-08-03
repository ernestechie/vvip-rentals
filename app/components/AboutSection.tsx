import image5 from '@/public/assets/jpeg/image-1.jpeg';
import Image from 'next/image';
import React from 'react';
import { FaPeopleRoof } from 'react-icons/fa6';
import { LiaCarSolid } from 'react-icons/lia';

const data = [
  {
    icon: <FaPeopleRoof />,
    heading: 'Hospitality',
    subHeading:
      'We strive to go beyond just providing a rental car; We aim to enhance your experience through exceptional hospitality and service.',
  },
  {
    icon: <LiaCarSolid />,
    heading: 'Comfort',
    subHeading:
      'Our commitment to exceptional customer service ensures that your deal with us is smooth, comfortable, and memorable.',
  },
];

export default function AboutSection() {
  return (
    <section
      id='about'
      className='p-8 lg:px-16 xl:px-32 pt-24 pb-24 grid grid-cols-1 lg:grid-cols-2 bg-primary items-center gap-12 rounded-br-3xl rounded-bl-3xl'
    >
      <div className=''>
        <div className='pb-8 border-gray-600 border-b' data-aos='fade-right'>
          <h3 className='text-5xl lg:text-6xl font-bold text-gray-50 mb-8'>
            VVIP Rentals
          </h3>
          <p className='text-xl text-justify text-gray-100'>
            We are an exclusive car rental service based in Cape Town. We offer
            hourly, daily, and long-term rental services. Most of our vehicles
            come with a chauffeur who will be at your service.
          </p>
        </div>

        {/* Motto */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-1 gap-6'>
          {data.map((item) => (
            <div
              data-aos='fade-left'
              key={item.heading}
              className='my-4 p-3 py-6 border-b border-gray-600'
            >
              <span className='text-accent text-5xl mb-4 block'>
                {item.icon}
              </span>
              <p className='text-white font-bold mb-4 text-2xl'>
                {item.heading}
              </p>
              <p className='text-gray-200 text-justify'>{item.subHeading}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <Image
        src={image5}
        width={300}
        height={300}
        objectFit='cover'
        alt='Mercedes-Maybach GLS 600 FL'
        className='w-full rounded-3xl max-w-2xl'
        data-aos='fade-left'
      />
    </section>
  );
}

import image1 from '@/public/assets/jpeg/image-1.jpeg';
import image3 from '@/public/assets/jpeg/image-3.jpeg';
import image5 from '@/public/assets/jpeg/image-5.jpeg';
import image6 from '@/public/assets/jpeg/image-6.jpeg';
import Image from 'next/image';
import React from 'react';

export default function OurVehiclesSection() {
  return (
    <section
      id='maybach-GLS-600-FL'
      className='p-8 lg:px-16 xl:px-32 pt-24 pb-24 bg-white'
    >
      <h4 className='text-5xl lg:text-6xl font-extrabold mb-16 sm:mb-32 text-center text-primary'>
        Our Vehicles
      </h4>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <div>
          <p className='font-bold text-4xl mb-4 md:text-5xl'>
            Mercedes-Maybach GLS 600 FL
          </p>
          <div className='text-lg text-gray-700'>
            <p className='my-4'>
              Lap-of-luxury interior, impossibly smooth ride, eye-catching
              obsidian black color.
            </p>
            <p className='my-4'>
              The Maybach GLS600 is the SUV you Go for when you simply cannot be
              bothered with something as plebeian as a Mercedes-Benz.
            </p>
            <p className='my-4'>
              Every inch of the GLS600`s interior has been optimized for comfort
              and richness. The GLS`s third row has been ditched here in favor
              of a four-seat layout with miles of legroom for rear-seat
              passengers. This SUV is meant for chauffeur duty because you`re
              almost certainly far too busy running your empire to distract
              yourself with driving.
            </p>
          </div>

          <div className='grid sm:grid-cols-2 gap-8 mt-8'>
            <Image
              src={image3}
              width={300}
              height={300}
              objectFit='cover'
              alt='Mercedes-Maybach GLS 600 FL'
              className='h-72 w-full rounded-3xl object-cover'
              data-aos='fade-right'
            />
            <Image
              src={image6}
              width={300}
              height={300}
              objectFit='cover'
              alt='Mercedes-Maybach GLS 600 FL'
              className='h-72 w-full rounded-3xl object-cover'
              data-aos='fade-right'
            />
          </div>
        </div>

        <Image
          src={image5}
          width={300}
          height={300}
          objectFit='cover'
          alt='Mercedes-Maybach GLS 600 FL'
          className='w-full rounded-3xl'
          data-aos='fade-right'
        />
      </div>
    </section>
  );
}

import React from 'react';
import Logo from './Logo';

export default function BookingProcess() {
  return (
    <section className='p-4 lg:px-16 xl:px-32 pt-24 pb-24 bg-primary text-gray-50'>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <Logo />
        <h5 className='font-extrabold text-center mb-8 text-4xl sm:text-6xl'>
          The Booking Process
        </h5>
      </div>

      <p className='sm:text-center text-xl mx-auto max-w-3xl'>
        The process of reserving a vehicle is straightforward.
        <br /> Select the desired vehicle, carefully review and agree to our
        rental terms, and make the payment for the rental amount. Contact us for
        more details.
      </p>
    </section>
  );
}

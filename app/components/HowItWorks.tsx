import React from 'react';

export default function HowItWorks() {
  return (
    <section className='p-4 lg:px-16 xl:px-32 pt-24 pb-24 bg-gray-100 text-gray-700'>
      <h6 className='font-extrabold text-center mb-8 text-4xl sm:text-6xl'>
        How It Works
      </h6>

      <div className='mx-auto max-w-4xl sm:text-xl'>
        <ul>
          <li className='my-3'>
            1. Only adults aged 30 and over are allowed to rent our vehicles.
          </li>
          <li className='my-3'>
            2. Select your vehicle and car rental days from the calendar (up to
            one month), book it and pay. Make sure you read the terms and
            conditions when you book and pay.
          </li>
          <li className='my-3'>
            3. You will be required to send us copies of your ID/passport,
            driver`s license and proof of address. We will also require these
            when delivering the vehicle to you.
          </li>
          <li className='my-3'>
            4. When we deliver the car to you, we will inspect the vehicle
            together and you will pay a R50,000 deposit. We have a mobile card
            machine to hold this money on your card.
          </li>
          <li className='my-3'>
            5. Rental includes 150km a day and R10 per km thereafter (after
            combined daily mileage for whole booking is used up).
          </li>
          <li className='my-3'>
            6. Car will be delivered with a full tank and should be returned the
            same. If not then we will bill your card to top up the tank plus
            R500 service charge.
          </li>
          <li className='my-3'>
            7. No smoking or drinking or eating is permitted in the vehicles.
          </li>
          <li className='my-3'>
            8. Any speeding fines will be billed to your card.
          </li>
          <li className='my-3'>
            9. Any damages to the vehicle will come out of your deposit.
          </li>
          <li className='my-3'>
            10. You will forfeit your rental fee plus R1,000 service fee if you
            cancel your booking within one week of the start date.
          </li>
        </ul>
      </div>
    </section>
  );
}

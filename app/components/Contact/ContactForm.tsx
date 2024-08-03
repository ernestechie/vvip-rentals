import React from 'react';

const ContactForm = () => {
  return (
    <section className='p-8 lg:px-16 xl:px-32 py-24 gradient-light relative'>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className=''>
          <p className='font-bold text-3xl sm:text-5xl xl:text-6xl text-primary'>
            Let`s Talk
          </p>
          <p className='md:text-lg py-8 text-secondary-text'>
            As with our other operations in Cape Town, you can be sure that your
            luxury car hire experience will be professional and smooth. <br />{' '}
            Book a car with us or fill out the form to get in touch with us.
          </p>

          {/* Contact Information */}
          <div className='mt-8'>
            <div className='my-8'>
              <p className='font-bold text-2xl'>Email</p>
              <a
                href='mailto:*****@vviprentals.com'
                className='text-secondary-text mt-2'
              >
                *****@vviprentals.com
              </a>
            </div>
            <div className='mt-16'>
              <p className='font-bold text-2xl mb-2'>Socials</p>
              <div className='flex flex-col gap-2'>
                <a
                  href='https://instagram.com/vviprentals_cpt'
                  target='_blank'
                  className='text-secondary-text'
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className='p-6 md:p-8 bg-white rounded-3xl shadow-xl mb-16'>
          <form action=''>
            <div className='my-8'>
              <label htmlFor='name' className='font-semibold mb-2'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='bg-gray-100 w-full p-4 outline-none rounded-xl text-secondary-text'
                required
              />
            </div>
            {/*  */}
            <div className='my-8'>
              <label htmlFor='email' className='font-semibold mb-2'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-100 w-full p-4 outline-none rounded-xl text-secondary-text'
                required
              />
            </div>
            {/*  */}
            <div className='my-8'>
              <label htmlFor='message' className='font-semibold mb-2'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                className='bg-gray-100 w-full p-4 outline-none rounded-xl text-secondary-text resize-none'
                required
              />
            </div>
            {/*  */}
            <button className='bg-black text-white w-full block p-3 rounded-xl'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default ContactForm;

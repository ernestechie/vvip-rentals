import obi_autos_logo from '@/public/obi_autos_logo.png';
import vvip_rentals_logo from '@/public/vvip_rentals_logo.png';
import Image from 'next/image';
import React from 'react';

export default function Logo() {
  return (
    <div className='flex items-center gap-4'>
      <Image src={obi_autos_logo} alt='Obi Autos Logo' height={80} width={80} />
      <Image
        src={vvip_rentals_logo}
        alt='VVIP Rentals Logo'
        height={70}
        width={70}
      />
    </div>
  );
}

'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return <div>{children}</div>;
}

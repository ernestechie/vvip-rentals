import type { Metadata } from 'next';
import FooterSection from './components/Footer';
import Navbar from './components/Navbar';
import ClientProvider from './components/Provider/ClientProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'VVIP Rentals',
  description: 'An exclusive car rental service based in Cape Town',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <ClientProvider>
          <Navbar />
          {children}
          <FooterSection />
        </ClientProvider>
      </body>
    </html>
  );
}

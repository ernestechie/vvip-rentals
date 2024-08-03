import AboutSection from './components/AboutSection';
import BookingProcess from './components/BookingProcess';
import Hero from './components/Home/Hero';
import HowItWorks from './components/HowItWorks';
import OurVehiclesSection from './components/OurVehiclesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <main className=''>
        <AboutSection />
        <OurVehiclesSection />
        <BookingProcess />
        <HowItWorks />
      </main>
    </>
  );
}

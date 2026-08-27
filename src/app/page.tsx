import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Specialization from '@/components/sections/Specialization';
import SoftwareCertifications from '@/components/sections/SoftwareCertifications';
import Process from '@/components/sections/Process';
import UpworkPortfolio from '@/components/sections/UpworkPortfolio';
import Testimonial from '@/components/sections/Testimonial';
import WhyWorkWithMe from '@/components/sections/WhyWorkWithMe';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Specialization />
        <SoftwareCertifications />
        <Process />
        <UpworkPortfolio />
        <Testimonial />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

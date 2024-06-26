import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { BentoGrids } from 'components/About';
import { Services } from 'components/Services';
import { Timeline } from 'components/Timeline';
import { ContactSection } from 'components/Contact';
import { HeroSection } from 'components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>AbdullahiPT</title>
        <link rel="icon" href="logo.jpg" />
      </Head>
      <Header />
      <main className="flex-grow bg-primary text-white">
        {/* Hero Section */}
        <HeroSection />
      
        {/* About Section */}
        <section id="about" className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
            <BentoGrids />
          </div>
        </section>
        
        {/* Timeline Section */}
        <section id="timeline" className="py-16">
          <Timeline />
        </section>
      
        {/* Services Section */}
        <section id="services" className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto">
            <Services /> 
          </div>
        </section>
      
        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
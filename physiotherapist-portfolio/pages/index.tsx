import Head from 'next/head';
import Header from 'components/header';
import Footer from 'components/footer';
import { BackgroundBeams } from 'components/background-beams';
import { BentoGridSecondDemo } from 'components/about-section';
import { ServicesSection } from 'components/services';
import { ContactForm } from 'components/contact'; // Import the ContactForm component

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Physiotherapist Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow bg-primary text-white">
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center bg-primary text-white overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h1 className="text-5xl font-bold">
              Welcome to <span className="text-accent">Abdullahi's</span> Portfolio
            </h1>
            <p className="mt-4 text-xl">
              Discover the healing power of <span className="text-accent">physiotherapy</span> and experience the benefits of personalized care. Trust in <span className="text-accent">Abdullahi's</span> expertise to guide you on your path to recovery and wellness.
            </p>
          </div>
          <BackgroundBeams className="absolute inset-0 z-0" />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
            <BentoGridSecondDemo />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Services</h2>
            <ServicesSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-primary">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Contact Me</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

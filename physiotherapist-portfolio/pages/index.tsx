// pages/index.tsx or the appropriate file for your home page

import Head from 'next/head';
import Header from 'components/header';
import Footer from 'components/footer';
import { BackgroundBeams } from 'components/background-beams';
import { BentoGridSecondDemo } from 'components/about-section';
import { Services } from 'components/services';
import { Timeline } from 'components/Timeline';
import { ContactForm } from 'components/contact';

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
        <section id="contact" className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-semibold mb-4 text-accent">Let's Connect</h3>
                  <p className="text-xl text-white opacity-90 mb-6">
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition duration-300"
                      style={{ color: "#6495ED" }}
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Head from 'next/head';
import Header from 'components/header';
import Footer from 'components/footer';
import { BackgroundBeams } from 'components/background-beams';
// import { BentoGrid, BentoGridItem } from 'components/bento-grid';
import { BentoGridSecondDemo } from 'components/about-section';

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
            <h2 className="text-4xl font-bold mb-8 text-ffffff">About Me</h2>
            {/* BentoGrid component imported from about-me.tsx */}
            <BentoGridSecondDemo />
          </div>
        </section>

        {/* Remaining Sections */}
        <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-5xl text-gray-800">Home Section</h1>
        </section>
        <section id="services" className="h-screen flex items-center justify-center bg-gray-300">
          <h1 className="text-5xl text-gray-800">Services Section</h1>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center bg-gray-400">
          <h1 className="text-5xl text-gray-800">Contact Section</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
}
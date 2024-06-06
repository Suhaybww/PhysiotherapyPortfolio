import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Physiotherapist Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow bg-primary text-white">
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl">Home Section</h1>
        </section>
        <section id="about" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl">About Section</h1>
        </section>
        <section id="services" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl">Services Section</h1>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl">Contact Section</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
}

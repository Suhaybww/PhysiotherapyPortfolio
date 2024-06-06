import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Physiotherapist Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto p-4">
        {/* About Section */}
        <section id="about" className="my-8">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p>
            {/* Add your about content here */}
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="my-8">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p>
            {/* Add your services content here */}
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-8">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>
            {/* Add your contact content here */}
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;

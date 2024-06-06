// import { AppProps } from 'next/app';
// import 'tailwindcss/tailwind.css';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;



import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

import Footer from '@/components/Footer/Footer';
import './globals.css';
import Header from '@/components/Header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
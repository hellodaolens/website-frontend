import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-multi-carousel/lib/styles.css';
import { ToastContainer } from 'react-toastify';
import { Footer } from '../components/common';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        rtl={false}
        theme="dark"
        width={'400px'}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

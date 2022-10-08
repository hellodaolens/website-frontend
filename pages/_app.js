import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import { ToastContainer } from "react-toastify";
import { Footer } from "../components/common";
import Script from "next/script";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
const tagManagerArgs = {
  gtmId: "GTM-PH3ZXT3",
};
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        rtl={false}
        theme="dark"
        width={"400px"}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

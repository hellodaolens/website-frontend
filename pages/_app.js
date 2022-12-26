import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-multi-carousel/lib/styles.css'
import { ToastContainer } from 'react-toastify'
import { Footer } from '../components/common'
import Script from 'next/script'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import LightFooter from '../components/common/LightFooter'

const tagManagerArgs = {
  gtmId: 'GTM-PH3ZXT3',
}

// TagManager.initialize(tagManagerArgs);

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, []);
  let pathname = router.pathname;

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://www.daolens.com${router?.asPath?.split('?')?.[0]}`}
          key="canonical"
        />
      </Head>
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
        width={'400px'}
      />
      <Component {...pageProps} />
      {pathname.includes("/discover-dao") || pathname.includes("/all-daos") ? <LightFooter /> :
        <Footer />}
    </>
  )
}

export default MyApp

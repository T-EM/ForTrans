// import NextNProgress from "nextjs-progressbar";

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css'; //styles of nprogress
//Route Events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <NextNProgress color="magenta" /> */}
      <div className="beta">In Production</div>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </>
  )
}

export default MyApp

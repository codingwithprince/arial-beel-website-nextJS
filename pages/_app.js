import Layout from '../components/layouts'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Navbar.css';
import '../styles/Hero.css';
import '../styles/responsive.css';
import '../styles/Seasons.css';
import '../styles/ImageGallary.css';
import '../styles/Location.css';
import '../styles/About.css';
import '../styles/Guide.css';
import '../styles/Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 600
    });
}, []);

  return (
    <Layout>
        <Head>
        <title>Arial Beel - The Third Largest Wetland Of Bangladesh</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keyword" content="arial beel,arial beel airport,
              arial beel wikipedia,
              arial beel map,
              arial beel location,
              arial beel natural resources,
              Dhaka to arial beel,
              how to go arial beel from dhaka,
              arial bill location,
              arial beel tour guide,
              arial beel bangladesh,
              arial beel munshiganj
              arial beel sreenagar,
              how to visit arial beel,
              hire boat in arial beel,
              alampur arialbeel" />
        <meta name="description" content="This website is all about Arial Beel ( আড়িয়াল বিল ). Arial Beel is the third largest wetland in Bangladesh Which is situated in Sreenagar Upazila of Munshiganj District. আড়িয়াল বিল ভ্রমন." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="4Qg7xxWvxPJN4xTfO_0tVbJnJ5vvPYiUwMpzxuULhCU" />
        <link rel="icon" href="/logo.png" />
      </Head>
     <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

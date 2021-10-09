import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import About from '../components/About';
import Guide from '../components/Guide';
import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import Location from '../components/Location';
import Seasons from '../components/Seasons';


export default function Home() {
  return (
   <>
    {/* Head */}
    <Head>
      <title>Arial Beel - The Third Largest Wetland Of Bangladesh</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" /> 
      <meta name="keyword" content="arial beel, munshiganj, alampur tourist places, sreenagar" />
      <meta name="description" content="This website is all about Arial Beel ( আড়িয়াল বিল ). Arial Beel is the third largest wetland in Bangladesh Which is situated in Sreenagar Upazila of Munshiganj District. আড়িয়াল বিল ভ্রমন." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="4Qg7xxWvxPJN4xTfO_0tVbJnJ5vvPYiUwMpzxuULhCU" />
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    </Head>
    {/* === Hero section === */}
    <Hero />
    {/* === Seasons Section === */}
    <Seasons />
    {/* === Image Gallery Section === */}
    <ImageGallery />
    {/* === Location Section === */}
    <Location />
    {/* === About Section === */}
    <About />
    {/* === Guide Section === */}
    <Guide />

   </>
  )
}

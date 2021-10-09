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
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
      <meta name="description" content="All about Arial Beel ( আড়িয়াল বিল ). It contains all information about arial beel and proper guide to visit. আড়িয়াল বিল." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="8dJfnlOl4CbW_P0tSVDiWWAP9ld_DusWtOuF1igHpLo" />
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

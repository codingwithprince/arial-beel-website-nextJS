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

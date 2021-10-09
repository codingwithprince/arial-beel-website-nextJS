import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import Seasons from '../components/Seasons';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
    {/* === Hero section === */}
    <Hero />
    {/* === Seasons Section === */}
    <Seasons />
    {/* === Image Gallery Section === */}
    <ImageGallery />
   </>
  )
}

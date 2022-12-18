import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

import { motion } from 'framer-motion';

import Footer from '@components/home/Footer/Footer';
import LatestBlog from '@components/home/LatestBlog/LatestBlog';
import ListenerList from '@components/home/ListenerList/ListenerList';
import ReadQuran from '@components/home/ReadQuran/ReadQuran';
import Recitering from '@components/home/Recitering/Recitering';
import About from '@components/home/about/About';
import Hero from '@components/home/heroPage/Hero';
import QuranChapter from '@components/home/quranChapter/QuranChapter';

const Home: NextPage = () => {
  return (
    <div className="">
      <Hero />
      <QuranChapter />
      <About />
      <ReadQuran />
      <ListenerList />
      <LatestBlog />
      <Recitering />
      <Footer />
    </div>
  );
};

export default Home;

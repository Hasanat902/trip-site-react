import React from 'react';
import Activities from './components/Activities';
import Banner from './components/Banner';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div>
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Banner></Banner>
      <Activities></Activities>
      <Booking></Booking>
      <Gallery></Gallery>
      <Contact></Contact>
    </div>
  );
}

export default App;

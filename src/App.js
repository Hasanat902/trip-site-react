import React from 'react';
import Activities from './components/Activities';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div>
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Banner></Banner>
      <Activities></Activities>
    </div>
  );
}

export default App;

import React from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div>
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;

import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
// import Newsletter from './components/Newsletter';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
}

export default App;

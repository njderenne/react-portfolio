import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <header>
        <Header></Header>
      </header>
      <main>
        <About></About>
        <Project></Project>
        <Contact></Contact>
      </main>
      <Footer></Footer>
        
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';


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
      </main>
        
    </div>
  );
}

export default App;

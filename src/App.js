import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  const [categories] = useState([
    {
      name: 'Home'
    },
    {
      name: 'About'
    },
    {
      name: 'Projects'
    },
    {
      name: 'Contact'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderPage = () => {
    switch(currentCategory.name) {
      case 'Home':
        return <div>
            <Hero 
              categories={categories}
              setCurrentCategory={setCurrentCategory}
              currentCategory={currentCategory}
            />
            <About/>
            <Project />
            <Contact />
            <Link
                    activeClass='active'
                    to='hero'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                    className='flex-row arrow-outline scroll-top'
                ><i className='arrow up'></i></Link>
            <Footer />
          </div>
      case 'About':
        return <div>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Nav>
            <About />
            <Footer />
          </div>
      case 'Projects':
        return <div>
        <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
        ></Nav>
        <Project />
        <Footer />
      </div>
      case "Contact":
        return <div>
        <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
        ></Nav>
        <Contact />
        <Footer />
      </div>
      default:
        return
    }
  };

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div>
        {renderPage(currentCategory)}
      </div>
    </div>
  );
}

export default App;

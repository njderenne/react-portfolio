import React from 'react';
import { Link } from 'react-scroll';
import Nav from '../Nav';

function Hero(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props

    return (
        <header className='hero' id='hero'>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Nav>
            <div className='hero-container'>
                <div className='vertical-center hero-section'>
                    <span className='hero-hi'>Hi, my name is<h1 className='hero-name'>Nate Derenne</h1></span>
                    <span className='hero-text'>I am a web developer from Green Bay, WI and currently living in Sun Prairie, WI.</span>
                </div>
                <div className='flex-row socials'>
                    <a href="https://github.com/njderenne" className="fa fa-github"></a>
                    <a href="https://www.linkedin.com/in/nathan-derenne-1939801b3/" className="fa fa-linkedin"></a>
                </div>
                <Link
                    activeClass='active'
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-135}
                    duration={500}
                    className='flex-row arrow-outline scroll-about'
                ><i className='arrow down'></i></Link>
            </div>
        </header>
    );
}

export default Hero;
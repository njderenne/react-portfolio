import React from 'react';
import Nav from '../Nav';

function Hero(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props

    return (
        <header className='hero'>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Nav>
            <div className='hero-container'>
                <div className='vertical-center'>
                    <span className='flex-row'>Hi, my name is<h1 className='flex-row'>Nate Derenne</h1></span>
                    <span className='flex-row'>I am a web developer from Green Bay, WI and currently living in Sun Prairie, WI.</span>
                </div>
                <div className='flex-row socials'>
                    <a href="https://github.com/njderenne" className="fa fa-github"></a>
                    <a href="https://www.linkedin.com/in/nathan-derenne-1939801b3/" className="fa fa-linkedin"></a>
                </div>
                <button className='flex-row no-background arrow-outline'><i className='arrow down'></i></button>
            </div>
        </header>
    );
}

export default Hero;
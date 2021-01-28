import React from 'react';
import Nav from '../Nav';

function Header() {
    return (
        <header className='hero'>
            <Nav></Nav>
            <div className='vertical-center'>
                <span className='flex-row'>Hi, my name is<h1 className='flex-row'>Nate Derenne</h1></span>
                <span className='flex-row'>I am a web developer from Green Bay, WI and currently living in Sun Prairie, WI.</span>
            </div>
            <button className='flex-row no-background'><i className='arrow down'></i></button>
        </header>
    );
}

export default Header;
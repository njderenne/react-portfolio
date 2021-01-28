import React from 'react';

function Nav() {

    return (
        <ul className='flex-row nav-bar'>
            <li className='mx-2 none'>
                <a data-testid='about' href='#about' className='none nav'>
                    About
                </a>
            </li>
            <li className='mx-2 none'>
                <a data-testid='projects' href='#projects' className='none nav'>
                    Projects
                </a>
            </li>
            <li className='mx-2 none'>
                <a data-testid='contact' href='#contact' className='none nav'>
                    Contact
                </a>
            </li>
            <li className='mx-2 none'>
                <a data-testid='resume' href='#resume' className='none nav'>
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default Nav;
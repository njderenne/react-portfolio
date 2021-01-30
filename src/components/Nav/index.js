import React, { useEffect } from 'react';
import pdf from '../../assests/files/Nathan_Derenne.pdf';

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <ul className='flex-row nav-bar'>
            {categories.map((category) => (
                <li className={`mx-2 none nav ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                    <span onClick={() => {setCurrentCategory(category)}}>{category.name}</span>
                </li>
            ))}
            <li className='mx-2 none nav-link'>
                <a data-testid='resume' href={pdf} target='_blank' download='Nathan_Derenne_Resume' className='none nav'>
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default Nav;

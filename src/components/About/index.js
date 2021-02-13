import React from 'react';

function About() {

    return (
        <section>
            <h2 className='section-title' id='about'>About</h2>
            <div className='about-container'>
                <img src={require('../../assests/headshot-1.jpg').default} alt='Nate Derenne' className='portrait'></img>
                <div className='about-text'>
                <span>I am a Full Stack Web Developer based out of Madison, WI. I started my journey as a Full Stack Developer working with Python creating programs to isolate specific patterns found within 3D arrays, that were input into the application by a user. These programs enabled solutions to problems astronomers were having working with radio data. This project resulted in a presentation at the American Astronomical Society Conference in Honolulu, HI. After I graduated from the University of Wisconsin-Madison, I found a personal interest in Front End Software Development. I desired to work with a group of developers to fully immerse myself into Full Stack Software Engineering. I enrolled in the University of Wisconsin Extended Learning Full Stack Software Engineering Bootcamp to aid in the learning process.</span>

                <h3>Technical Skills:</h3>
                <ul>
                    <li><span className='bold'>Languages:</span> JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, Python</li>
                    <li><span className='bold'>Applications:</span> Adobe Lightroom, Adobe Photoshop, GitHub, MySQL, SQLite, MongoDB, MERN Stack, Redux, PWA</li>
                    <li><span className='bold'>Tools:</span> Node, Express, Inquirer, Sequelize, MongoDB, Jest, bcrypt.js, Heroku, MVC, RESTful API, Context API, Global State Management, OOP, jQuery, Bootstrap, Handlebars.js, Agile, NumPy, SCIMES, NetworkX</li>
                </ul>

                </div>
            </div>
        </section>
    );
}

export default About;
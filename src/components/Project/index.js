import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Modal from '../Modal';

function Project() {

    const [projects] = useState([
        {
            title: '24-Chains',
            locations: '24_chains.JPG',
            technology: 'JavaScript, Bootstrap, SCSS, HTML, Node, Express, MySQL',
            github: 'https://github.com/MarynaPR/24-chains',
            application: 'https://dry-mesa-09626.herokuapp.com/',
            description: '24 Chains gets its name from the standard frisbee golf basket consisting of 24 chains. This application is a hybrid between the ability to search for a frisbee golf course and a social media page. Users can search for, save, and favorite different courses for quick reference in the future as well as posting reviews and results from there our games. This helps the community find things they both like and dislike about courses, show off they scores they were able to achieve and even find their next favorite frisbee golf course!',
            animation: 'fade-right',
        },
        {
            title: 'OneStopJob',
            locations: 'Screenshot.png',
            technology: 'JavaScript, HTML, CSS, Bulma',
            github: 'https://github.com/frostyausty/OneStopJob',
            application: 'https://frostyausty.github.io/OneStopJob/',
            description: 'This web application was built on the need to localize multiple job posting from a variety of job search platforms. OneStopJob is the solution to that problem, the application pulls jobs from two prominent job search platforms. The two platforms are Adzuna and USAJobs. OneStopJob allows the user to look for jobs that may only be offered on a specific job posting database, on one application resulting in an easier and more efficent job search experience.',
            animation: 'fade-up',
        },
        {
            title: 'E-commerce Shop!',
            locations: 'e-commerce.JPG',
            technology: 'JavaScript, CSS, HTML, MERN, Redux, PWA, JWT',
            github: 'https://github.com/njderenne/ecommerce-shop-redux',
            application: 'https://warm-escarpment-52913.herokuapp.com/',
            description: 'As a user, I create an account through the signup page and after initial signup I can login to the application through a login page. When I view the home page I can see all products available for purchase. If I click on a category the list of products is updated to show only the products under that specific category. ',
            animation: 'fade-left',
        },
        {
            title: 'The Tech Blog',
            locations: 'tech_blog.JPG',
            technology: 'JavaScript, CSS, HTML, Handlebars, Express, Node, MySQL, Jest',
            github: 'https://github.com/njderenne/tech-blog',
            application: 'https://calm-shelf-50969.herokuapp.com/',
            description: 'This application is a responsive blog webpage used for the tech community. The user has the ability to sign up and log in. Once the user is logged in they can see other user blog posts as well as a dashboard where they can see the blog posts they have created. In the dashboard the user also can create new blog posts, edit a post they have already created or delete a created post. From the homepage or the user dashboard the user will have the ability to view all comments on a blog post and will be directed to a page with just a singular post where they can then add a new comment.',
            animation: 'fade-right',
        },
        {
            title: 'Oh Snap!',
            locations: 'oh_snap.JPG',
            technology: 'JavaScript, CSS, HTML, React, Node, MongoDB',
            github: 'https://github.com/njderenne/photo-port',
            application: 'https://njderenne.github.io/photo-port/',
            description: 'This is the Oh Snap description',
            animation: 'fade-up',
        },
        {
            title: 'Social Media API',
            locations: 'social_media_api.JPG',
            technology: 'JavaScript, Node, Express, MongoDB',
            github: 'https://github.com/njderenne/social-network-api',
            application: 'https://github.com/njderenne/social-network-api',
            description: 'Created a backend API for use in a social media application',
            animation: 'fade-left',
        }
    ])

    const [currentProject, setCurrentProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (project, i) => {
        setCurrentProject({...project, index: i});
        setIsModalOpen(!isModalOpen);
    }

    useEffect(() => {
        Aos.init({duration: 1000 });
    })

    return (

        <section>
            {isModalOpen && (
                <Modal currentProject={currentProject} onClose={toggleModal} />
            )}
            <h2 className='section-title'>Projects</h2>
            <div className='project-container'>
                {projects.map((project, i) => (
                    <div data-aos={project.animation} className={`project project-${i+1}`} key={project.title}>
                        <img 
                            src={require(`../../assests/screenshots/${project.locations}`).default} 
                            className='project-image'
                            alt={project.title}
                            onClick={() => toggleModal(project, i)}
                            key={i}
                        />
                        <h3 className='project-name'>{project.title}</h3>
                        <h4 className='project-tech'>{project.technology}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
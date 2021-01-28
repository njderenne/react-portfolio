import React from 'react';

function Project() {

    return (
        <section>
            <h2 className="section-title">Projects</h2>
            <div className='project-container'>
                <div className='project project-1'>
                    <img src={require('../../assests/screenshots/24_chains.JPG').default} className='project-image'></img>
                </div>
                <div className='project project-2'>
                    <img src={require('../../assests/screenshots/Screenshot.png').default} className='project-image'></img>
                </div>
                <div className='project project-3'>
                    <img src={require('../../assests/screenshots/git_it_done.JPG').default} className='project-image'></img>
                </div>
                <div className='project project-4'>
                    <img src={require('../../assests/screenshots/tech_blog.JPG').default} className='project-image'></img>
                </div>
                <div className='project project-5'>
                    <img src={require('../../assests/screenshots/oh_snap.JPG').default} className='project-image'></img>
                </div>
                <div className='project project-6'>
                    <img src={require('../../assests/screenshots/social_media_api.JPG').default} className='project-image'></img>
                </div>
            </div>
        </section>
    );
}

export default Project;
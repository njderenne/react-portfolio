import React from 'react';

function Modal({ onClose, currentProject }) {

    const {title, locations, technology, github, application, description} = currentProject;

    return (

        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{title}</h3>
                <h4 className='modal-tech'>{technology}</h4>
                <img src={require(`../../assests/screenshots/${locations}`).default} alt="current category" className='modal-img'/>
                <p className='modal-description'>
                    {description}
                </p>
                <a href={github} target="_blank" className='modal-link github'>GitHub</a>
                <a href={application} target="_blank" className='modal-link live-app'>Live App</a>
                <button onClick={onClose} type="button" className='modal-button'>
                    Close this modal
                </button>
            </div>
        </div>

    );
};

export default Modal;
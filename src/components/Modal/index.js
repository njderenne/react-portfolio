import React from 'react';

function Modal({ onClose, currentProject }) {

    const {title, locations, description} = currentProject;

    return (

        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{title}</h3>
                <img src={require(`../../assests/screenshots/${locations}`).default} alt="current category" className='modal-img'/>
                <p className='modal-description'>
                    {description}
                </p>
                <button>GitHub</button>
                <button>Live App</button>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>

    );
};

export default Modal;
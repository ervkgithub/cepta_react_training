import React, { useState } from 'react'
import Modal from '../common/Modal';

const ComponentModal = () => {
    const [status, setStatus] = useState(false);
    const showModal = () => {
        setStatus(status => true);
    }
    const closeModal = () => {
        setStatus(status => false);
    }
    return (
        <>
            <br></br>
            <button className='btn btn-primary modal-btn' type='button' onClick={showModal}>Show Modal</button>
            <br></br> <br></br>
            {status &&
                <Modal closeModal={closeModal} />
            }
        </>
    )
}

export default ComponentModal;
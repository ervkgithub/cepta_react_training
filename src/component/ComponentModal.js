import React, { useState } from 'react'

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
                <div className='modal-custom'>
                    <div className='modal-content-custom'>
                        <div>Modal Title</div>
                        <p>Modal Description</p>
                        <br></br>
                        <button className='btn btn-info' type='button' onClick={closeModal}>Close</button>
                    </div>
                </div>
            }
        </>
    )
}

export default ComponentModal;
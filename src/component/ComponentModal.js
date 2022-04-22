import React, {useState} from 'react'

const ComponentModal = () =>{
    const [status, setStatus] = useState(false);
    const showModal = () =>{
        setStatus(status => true);
    }
   const closeModal = ()=>{
        setStatus(status => false);
    }
    return(
        <>
           <button type='button' onClick={showModal}>Show Modal</button> <br></br><br></br>
           {status && 
            <div className='modal'>
                <div className='modal-content'>
                    <div>Modal Title</div>
                    <p>Modal Description</p>
                    <br></br>
                    <button type='button' onClick={closeModal}>Close</button>
                </div>
            </div>
          }
        </>
    )
}

export default ComponentModal;
import React, { useState } from 'react';

const FunComp = () => {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(true);
    const Increase = () => {
        setCount(count => count + 1);
    }
    const Decrease = () =>{
        if(count > 0){
        setCount(count => count - 1);
        }
    }
    const showHide = () =>{
        setStatus(status => !status);
    }
    return(
        <>
         <div>Count : {count} </div><br></br>
         <button type='button' onClick={Increase}>Increase</button>
         <button type='button' onClick={Decrease}>Decrease</button>
         <br></br><br></br>
         { status && <div>Show/Hide Div Content</div> }
         <br></br>
         <button type='button' onClick={showHide}>Click to Show/Hide</button>
        </>
    )
}

export default FunComp;
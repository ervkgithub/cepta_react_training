import React, { useState } from 'react';

const FunComp = () => {
    const [count, setCount] = useState(0);
    const Increase = () => {
        setCount(count => count + 1);
    }
    const Decrease = () =>{
        setCount(count => count - 1);
    }
    return(
        <>
         <div>Count : {count} </div>
         <button type='button' onClick={Increase}>Increase</button>
         <button type='button' onClick={Decrease}>Decrease</button>
        </>
    )
}



export default FunComp;
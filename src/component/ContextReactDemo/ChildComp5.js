import React, {useContext} from 'react';
import { WeatherContext } from './DataContext';

const ChildComp5 = () => {
    const localTemp = useContext(WeatherContext)
    return(
        <>
            Temp in Child 5 - {localTemp.val}
            <br></br> <br></br>
            <button className='btn btn-info' onClick={localTemp.valMethod}>Update temprature from Child comp 5</button>
        </>
    )
}

export default ChildComp5;
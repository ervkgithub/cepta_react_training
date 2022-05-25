import React, { Component } from 'react';
// import Child from './Child';
import { MyContext } from './ContextDemo';
class Parent extends Component {
    render() {
        return (
            <>
                <h4>Parent Component</h4>
                <MyContext.Consumer>
                    {({ data, setBGDark, setBGRed, setBGBlue }) => (
                        <>
                            <button className='dark-cta' onClick={setBGDark}>Set BG Dark</button>
                            <button className='red-cta' onClick={setBGRed}>Set BG Pink</button>
                            <button className='blue-cta' onClick={setBGBlue}>Set BG Yellow</button>
                        </>
                    )}
                </MyContext.Consumer>
            </>
        )
    }
}

export default Parent;

import React, { Component } from 'react';
import Child from './Child';
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
                            <button className='red-cta' onClick={setBGRed}>Set BG Red</button>
                            <button className='blue-cta' onClick={setBGBlue}>Set BG Blue</button>
                        </>
                    )}
                </MyContext.Consumer>
                <Child />
            </>
        )
    }
}

export default Parent;

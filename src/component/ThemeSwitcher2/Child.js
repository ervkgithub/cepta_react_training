import React, { Component } from 'react';
import { MyContext } from './ContextDemo';

class Child extends Component {
    render() {
        return (
            <>
                <h3>Child Componnet</h3>
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

export default Child;

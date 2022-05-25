
import React, { Component } from 'react';
import Parent from './Parent';
import Child from './Child';
export const MyContext = React.createContext();

class ContextDemo extends Component {
    state = {
        darkTheme: "#101820FF",
        redTheme: "#ffc0cb",
        blueTheme: "#fffac0",
    }

    setBGDark = () => {
        document.querySelector(".navbar").style.backgroundColor = this.state.darkTheme;
        document.querySelector("a").style.color = "#fff";
    }

    setBGRed = () => {
        document.querySelector(".navbar").style.backgroundColor = this.state.redTheme;
        document.querySelector("a").style.color = "#fff";
    }

    setBGBlue = () => {
        document.querySelector(".navbar").style.backgroundColor = this.state.blueTheme;
        document.querySelector("a").style.color = "#fff";
    }

    render() {
        return (
            <MyContext.Provider value={{ setBGDark: this.setBGDark, setBGRed: this.setBGRed, setBGBlue: this.setBGBlue }}>
                <Parent />
                <Child />
            </MyContext.Provider>
        )
    }
}

export default ContextDemo;

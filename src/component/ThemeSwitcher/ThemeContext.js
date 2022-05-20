import React from 'react';
import ThemeContainer from './ThemeContainer';

const ThemeContext = React.createContext();

class ThemeApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            darkTheme : "#000",
            lightTheme : "#fff"
        }
    }
    
    render() {
        return (
            <>
                <ThemeContext.Provider value={this.state}>
                    <ThemeContainer />
                </ThemeContext.Provider>
            </>
        )
    }
}

export default ThemeApp;

export { ThemeContext };


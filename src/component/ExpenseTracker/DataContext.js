import React, { useState } from 'react';

const DataContext = React.createContext();

const DataApp = (props) => {
    const initialValues = {loginstatus: false, username: 'User 1', balanceAmount: 0}
    const [appstate, setAppState] = useState(initialValues);

    const login = () => {
        setAppState({...appstate, loginstatus: !appstate.loginstatus});
    }
    const addBalance = (temp) => {
        console.log('temp', temp, typeof(temp))
        setAppState({...appstate, balanceAmount: appstate.balanceAmount + parseInt(temp)});
    }
    const subBalance = (temp) => {
        console.log('temp', temp, typeof(temp))
        setAppState({...appstate, balanceAmount: appstate.balanceAmount - parseInt(temp)});
    }

    return(
        <DataContext.Provider value={{appstate, login, addBalance, subBalance}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataApp;

export {DataContext};



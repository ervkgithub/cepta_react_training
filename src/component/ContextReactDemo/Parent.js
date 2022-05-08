import React from "react";
import ChildComp1 from "./ChildComp1";
import { WeatherContext } from "./DataContext";

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            temprature : '30 degree cecious'
        }
    }
    updateTepmprature = () =>{
        this.setState = {
            temprature : '45 degree cecious'
        }
    }
    render() {
        return (
            <>
                Parent Component :
               <WeatherContext.Provider value={{val:this.state.temprature, valMethod:this.updateTepmprature}}>
                   <ChildComp1 temp={this.state.temprature} />
               </WeatherContext.Provider>
               <button onClick={this.updateTepmprature}>Update temprature</button>
            </>
        )
    }
}

export default Parent;

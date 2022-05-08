import React from "react";
import ChildComp1 from "./ChildComp1";
import { WeatherContext } from "./DataContext";

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            temprature : '30 degree celcious'
        }
    }
    updateTepmprature = () =>{
        this.setState ({
            temprature : '45 degree celcious'
        });
    }
    render() {
        return (
            <>
               <WeatherContext.Provider value={{val:this.state.temprature, valMethod:this.updateTepmprature}}>
                   <ChildComp1 temp={this.state.temprature} />
               </WeatherContext.Provider>
               <br></br><br></br>
               <button className="btn btn-primary" onClick={this.updateTepmprature}>Update temprature from Parent Comp</button>
            </>
        )
    }
}

export default Parent;

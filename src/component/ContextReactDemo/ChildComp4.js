import React from "react";
import ChildComp5 from "./ChildComp5";
import { WeatherContext } from './DataContext';

class ChildComp4 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <WeatherContext.Consumer>
                    {
                        (temp) => {
                            return (
                                <>
                                    Temperature in Child Comp 4 = {temp.val}
                                    <br></br><br></br>
                                    <button className="btn btn-danger" onClick={temp.valMethod}>Update Temperature form child comp 4</button>
                                    <br></br>
                                </>
                            )
                        }
                    }
                </WeatherContext.Consumer>
                <br></br>
                <ChildComp5 />
            </>
        )
    }
}

export default ChildComp4;
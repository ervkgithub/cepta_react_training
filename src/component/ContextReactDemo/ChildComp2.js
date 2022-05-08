import React from "react";
import ChildComp3 from "./ChildComp3";

class ChildComp2 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <ChildComp3 temp={this.props.temp} />
            </>
        )
    }
}

export default ChildComp2;
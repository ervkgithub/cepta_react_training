import React from "react";
import ChildComp4 from "./ChildComp4";

class ChildComp3 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <ChildComp4 temp={this.props.temp} />
            </>
        )
    }
}

export default ChildComp3;

import React from "react";

class DigitalClockClass extends React.Component {
    constructor() {
        super();
        this.state = {
            curr_time: new Date().toLocaleString(),
        }
    }
    componentDidUpdate = () => {
        this.setState({
            curr_time: this.state.curr_time
        });
    }
    componentWillUnmount = () => {
        this.setState({
            curr_time : 0
        });
    }
    render() {
        return (
            <>
                <div className="digital-clock-wrap">
                    <div className="dc-label">Digital Clock Time Class: </div>
                    <div className="date-time">{this.state.curr_time}</div>
                </div>
            </>
        )
    }
}

export default DigitalClockClass;

import React from "react";

class DigitalClockClass extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleString()
        };
    }
    componentDidMount() {
      setInterval(() => {
            this.setState({
                time: new Date().toLocaleString(),
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        return (
            <>
                <div className="digital-clock-wrap">
                    <div className="dc-label">Digital Clock Time Class: </div>
                    <div className="date-time">{this.state.time}</div>
                </div>
            </>
        )
    }
}

export default DigitalClockClass;
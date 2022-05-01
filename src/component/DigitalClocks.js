
import React, { useState } from "react";

const DigitalClock = () => {
    let time = new Date().toLocaleString();
    const [curTime, setCurTime] = useState(time);

    const UpdatedTime = () => {
        let time = new Date().toLocaleString();
        setCurTime(time);
    }
    setInterval(UpdatedTime,1000);
    return (
        <>
            <div className="digital-clock-wrap">
                <div className="dc-label">Digital Clock Time: </div>
                <div className="date-time">{curTime}</div>
            </div>
        </>
    )
}

export default DigitalClock;
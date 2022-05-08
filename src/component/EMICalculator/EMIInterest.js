import React from "react";

const EMIInterest = (props) => {
    return (
        <>
            <h5>EMI Interest</h5>
            <div className="emi-box">
                <input type="number" onChange={props.handleClick} value={props.interest} />
            </div>
        </>
    )
}

export default EMIInterest;

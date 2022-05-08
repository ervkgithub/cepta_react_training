import React from "react";

const EMITenure = (props) => {
    return (
        <>
            <h5>EMI Tenure</h5>
            <div className="emi-box">
                <input type="number" onChange={props.handleClick} value={props.tenure} />
            </div>
        </>
    )
}

export default EMITenure;


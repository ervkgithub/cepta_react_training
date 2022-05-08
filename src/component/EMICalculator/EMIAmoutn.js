import React from "react";

const EMIAmount = (props) => {
        return (
            <>
                <h5>EMI Amount</h5>
                <div className="emi-box">
                    <input type="text" onChange={props.handleClick} value={props.amount} />
                </div>
            </>
        )
}

export default EMIAmount;

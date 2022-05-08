import React from "react";

const EMIData1 = (props) => {
    let compundAmount = props.data.amount * Math.pow((1 + (props.data.interest / 100)), props.data.tenure);
    return (
        <>
            <h5>EMI Data1</h5>
            <div className='bg-secondary border border-primary rounded bg-opacity-10'>
                <div className="emi-box">
                    Principal Amount = {props.data.amount}
                </div>
                <div className="emi-box">
                    Interest = {compundAmount - props.data.amount}
                </div>
                <div className="emi-box">
                    Total Amount = {compundAmount}
                </div>
            </div>
        </>
    )
}

export default EMIData1;


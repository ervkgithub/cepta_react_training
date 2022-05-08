import React from "react";
import EMIAmount from "./EMIAmoutn";
import EMIInterest from "./EMIInterest";
import EMITenure from "./EMITenure";
import EMIData1 from "./EMIData1";
import EMIData2 from "./EMIData2";

class EMI extends React.Component {
    constructor(){
        super();
        this.state = {
            amount : 10000,
            interest : 10,
            tenure : 10
        }
    }    

    handleClickAmount = (e) =>{
        console.log("child comp1 clicked");
        console.log(e.target.value);
        this.setState({
            ...this.state, 
            amount : e.target.value
        });
    }

    handleClickInterest = (e) =>{
        console.log("child comp2 clicked");
        console.log(e.target.value);
        this.setState({
            ...this.state, 
            interest : e.target.value
        });
    }

    handleClickTenure = (e) =>{
        console.log("child comp3 clicked");
        console.log(e.target.value);
        this.setState({
            ...this.state, 
            tenure : e.target.value
        });
    }



    render() {
        return (
            <>
                <h2>EMI Calculator:</h2>
                <div className="emi-wrap">
                <div className="emi-box">
                    <EMIAmount amount={this.state.amount} handleClick={this.handleClickAmount} />
                </div>
                <div className="emi-box">
                    <EMIInterest interest={this.state.interest} handleClick={this.handleClickInterest}  />
                </div>
                <div className="emi-box">
                    <EMITenure tenure={this.state.tenure} handleClick={this.handleClickTenure} />
                </div>
                <div className="row">
                <div className="emi-box col-md-5">
                    <EMIData1 data={this.state} />
                </div>
                <div className="emi-box col-md-7">
                    <EMIData2 data={this.state} />
                </div>
                </div>
                </div>

            </>
        )
    }
}

export default EMI;
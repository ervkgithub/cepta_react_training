
import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            address: "Delhi"
        }
    }

    fn_Increment = () => {
        this.setState ( {
            count: this.state.count + 1 
        }
        )
    }
    fn_Decrement = () => {
        this.setState ( {
            count: this.state.count - 1 
        }
        )
    }
    fn_Update_Address = () => {
        this.setState ( {
            address: "Gurugram"
        }
        )
    }

    render() {
        return (
            <div>
                <h2>Counter component</h2>
                <div>
                    <p>Counter: {this.state.count}</p>
                    <p>Address: {this.state.address}</p>
                    <input type="button" onClick={this.fn_Increment} value="Increment" />
                    <input type="button" onClick={this.fn_Decrement} value="Decrement" />
                    <input type="button" onClick={this.fn_Update_Address} value="Update Address" />
                    
                </div>
            </div>
        )
    }
}

export default Counter;
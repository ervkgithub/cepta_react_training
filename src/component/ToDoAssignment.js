
import React, { Component } from 'react';

class ToDoAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            list: []
        }
    }

    // Add HobbiesUpdate input

    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    // Add Hobbies

    addHobbies() {
        if (this.state.userInput !== '') {
            const userInput = {
                id: Math.random(),
                value: "Hobbies - " + this.state.userInput
            };
            const list = [...this.state.list];
            list.push(userInput);
            // reset
            this.setState({
                list,
                userInput: ""
            });
        }
    }

    // Add Food

    addFood() {
        if (this.state.userInput !== '') {
            const userInput = {
                id: Math.random(),
                value: "Food - " + this.state.userInput
            };
            const list = [...this.state.list];
            list.push(userInput);
            this.setState({
                list,
                userInput: ""
            });
        }
    }

    // Add Place

    addPlace() {
        if (this.state.userInput !== '') {
            const userInput = {
                id: Math.random(),
                value: "Favorite Place - " + this.state.userInput
            };
            const list = [...this.state.list];
            list.push(userInput);
            this.setState({
                list,
                userInput: ""
            });
        }
    }

    // Delete Todo List

    deleteToDOList(key) {
        const list = [...this.state.list];
        const updateList = list.filter(item => item.id !== key);
        this.setState({
            list: updateList,
        });
    }

    render() {
        return (
            <div className="todo_list_wrap">
                <div className="add_item_input">
                    <h2>TO DO List</h2>
                    <input type="text"
                        placeholder="Enter To DO List Item..."
                        value={this.state.userInput}
                        onChange={item => this.updateInput(item.target.value)}
                    />
                    <div className="cta_wrap">
                        <div className="add_item_cta" onClick={() => this.addHobbies()}>
                            ADD Hobbies
                        </div>
                        <div className="add_item_cta" onClick={() => this.addFood()}>
                            ADD Foods
                        </div>
                        <div className="add_item_cta" onClick={() => this.addPlace()}>
                            ADD Favorite Place
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.list.map(item => {
                        return (
                            <>
                                <div className="todo_list">
                                    {item.value}
                                </div>
                                <div className="cta_delete" onClick={() => this.deleteToDOList(item.id)}>Delete</div>
                            </>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default ToDoAssignment;
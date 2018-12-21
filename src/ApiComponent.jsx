import React from 'react';
import CandleStickChart from './ChartComponent';
import { TypeChooser } from "react-stockcharts/lib/helper";
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';//we import the connect method from react-redux

//It's useful, but not necessary, to define your action types as variables and reference them when you define your actions
//maybe do this in a seperate file and import, you can then reference them here and also in your reducer
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const add_todo = todo => {
    return {
        type: ADD_TODO,
        value: todo
    };
};

const remove_todo = indexOfTodo => {
    return {
        type: REMOVE_TODO,
        value: indexOfTodo
    };
};

//we define the mapStateToProps function where we will pass in to the connect method further down
//We assign the entire state here to the todos property as we only contain the list of todos in the state
const mapStateToProps = state => {
    return {
        todos: state
    };
};

//we aren't using mapDispatchToProps as we don't need it in this simple example
//const mapDispatchToProps = state => {
//    return{}; 
//};

class ApiComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            apiData: {}
        }

    }

    // state = {
    //     apiData: {}
    // }

    handleChange = e => {
        this.setState({
            userInput: e.target.value
        });
    };

    async fetchData() {
        let response = await fetch(this.props.site);
        try {
            if (response.ok) {
                let apiData = await response.json()
                this.setState({
                    apiData,
                });
            }
        } catch (error) {
            alert('Error occured reload page');
            console.error(error)
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        console.log(37, this.state);
        return (
            this.state.apiData.Data !== undefined ?
                <div className="Chart-main">
                    <h2>Insert todo</h2>
                    <input 
                        type="text"
                        name="todo"
                        onChange={e => {
                            return this.handleChange(e);
                        }}
                    />
                    <button
                        onClick={() => {
                            //we define and call the dispatch method here as this is where
                            //out event is triggered. We pass in the action, which in turn is passed
                            //in the user input(this is how our data is passed into the store)
                            return this.props.dispatch(add_todo(this.state.userInput));
                        }}
                    >
                        Add 
                    </button>
                    <ul>
                        {this.props.todos && 
                            this.props.todos.map(todo => {
                                return (
                                    <li
                                        onClick={() => {
                                            //We have another dispatch here for our section action
                                            //this time passing in the index of the todo in the state
                                            let todoIndex = this.props.todos.findIndex(k => k === todo);
                                            return this.props.dispatch(remove_todo(todoIndex));
                                        }}
                                    >
                                        {todo}
                                    </li>
                                );
                            })
                        }
                    </ul>

                    <h1>Crypto Chart</h1>
                    <TypeChooser >
                        {type => <CandleStickChart type={type} data={this.state.apiData.Data} />}
                    </TypeChooser>
                </div>
                :
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Loading...
                        </a>
                    </header>
                </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(ApiComponent)

//export default ApiComponent;


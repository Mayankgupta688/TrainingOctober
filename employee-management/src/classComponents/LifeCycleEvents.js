import React from 'react';

export default class LifeCycleEvents extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            name: "Mayank",
            age: 20
        }
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        if(this.state.name === nextState.name) {
            return false
        }
        return true;
    }

    render() {
        debugger;
        return (
            <div>
                <h1>User Name is: { this.state.name }</h1>
            </div>
        )
    }

    componentDidUpdate() {
        debugger;
        console.log("Component Did Update...");
        
    }

    componentDidMount() {
        debugger
        this.setState({
            ...this.state,
            name: "Ankit"
        })
    }
}
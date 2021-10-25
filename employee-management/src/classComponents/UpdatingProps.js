import React from 'react';

export default class UpdatingProps extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "TechnoFunnel"
        }
    }

    render() {
        return (
            <div>
                <h1>Component Name from Parent is {this.state.name}</h1>
                <ChildComponent name={this.state.name}></ChildComponent>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "Mayank"
            })
        }, 10000)
    }
}

class ChildComponent extends React.Component {

    shouldComponentUpdate(nextProps) {
        debugger;
        return false;
    }

    render() {
        debugger;
        return (
            <h2>Name in Child Component is {this.props.name}</h2>
        )
    }
}
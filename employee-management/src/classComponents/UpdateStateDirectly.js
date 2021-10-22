import React from 'react';

export default class UpdateStateDirectly extends React.Component {
    constructor() {
        debugger;
        super();
        this.state = {
            counter: 0
        }

        setInterval(() => {
            this.state.counter = this.state.counter + 1;
            console.log(this.state.counter);
            debugger;
            this.forceUpdate();
        }, 10000)

        // setInterval(() => {
        //     this.setState({
        //         counter: this.state.counter + 1
        //     })
        // }, 1000)
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Current Counter is {this.state.counter}</h1>
            </div>
        )
    }
}
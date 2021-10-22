import React from 'react';

// setState is Asynchronous....

export default class UsingMultipleSetState extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

    getData() {
        debugger;
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            debugger;
            this.setState({
                counter: this.state.counter + 1
            }, () => {
                debugger;
                this.setState({
                    counter: this.state.counter + 1
                }, () => {
                    debugger;
                    this.setState({
                        counter: this.state.counter + 1
                    }, () => {
                        debugger;
                        this.setState({
                            counter: this.state.counter + 1
                        }, () => {
                            alert("Value updated by 5")
                        })
                    })
                })
            })
        });
    }

    render() {
        debugger;
        alert(this);
        return (
            <div>
                <h1>The current counter is: {this.state.counter}</h1>
                <input type="button" onClick={() => this.getData} value="Click Data" />
            </div>
        )
    }
}
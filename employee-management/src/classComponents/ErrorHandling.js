import React from 'react';

export default class ErrorBoundries extends React.Component {

    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error) {
        alert(error.message);
    }

    static getDerivedStateFromError(error) {
        console.log("Error");
        return {
            hasError: true
        }
    }

    render() {
        return (
            <div>
                {this.state.hasError === false && <ErrorHandling></ErrorHandling>}
                {this.state.hasError === true && <ErrorMessage></ErrorMessage>}
            </div>
        )
    }
}

function ErrorMessage() {
    return <div>Some Random Error</div>
}

class ErrorHandling extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "TechnoFunnel",
            counter: 10
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.counter === 5) {
            debugger;
            throw new Error("This is a error Situation");
        }
        return true;
    }

    render() {
        return (
            <div>
                <h1>This is the User Name {this.state.name}</h1>
                <h2>The counter value is: {this.state.counter}</h2>
            </div>
        )
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                ...this.state,
                counter: Math.floor(Math.random() * 10)
            })
            
        }, 1000);
    }
}


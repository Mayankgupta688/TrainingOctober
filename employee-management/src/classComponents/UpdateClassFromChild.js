import React from 'react';

export class UpdateClassFromChild extends React.Component {
    constructor() {
        super();
        this.state = {
            time: this.getCurrentTime()
        }
    }

    updateTime = () => {
        this.setState({
            time: this.getCurrentTime()
        })
    }

    getCurrentTime = () => {
        var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
        console.log(currentTime)
        return currentTime;
    }

    render() {
        return (
            <div>
                <h1>Current Time is {this.state.time}</h1><hr/>
                <ChildComponent updateTime={this.updateTime}></ChildComponent>
            </div>
        )
    }
}

function ChildComponent(props) {
    return <input type="button" value="Update Time" onClick={props.updateTime} />
}
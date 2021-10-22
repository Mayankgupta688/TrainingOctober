import React from 'react';

export default class AttachingEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            time: this.getCurrentTime()
        }
    }

    getTime = () => {
        this.setState({
            time: this.getCurrentTime()
        })
    }

    getCurrentTime() {
        var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
        console.log(currentTime)
        return currentTime;
    }

    render() {
        return (
            <div>
                <h1>Current Time is {this.state.time}</h1>
                <input type="button" value="Click to Update Time" onClick={this.getTime} /> <br/><br/>
                <input type="button" value="Hover to Update Time" onMouseOver={this.getTime} /> <br/><br/>
                <input type="button" value="Double Click to Update Time" onDoubleClick={this.getTime} /> <br/><br/>
                <input type="button" value="MouseOut to Update Time" onMouseOut={this.getTime} /> <br/><br/>
            </div>
        )
    }
}
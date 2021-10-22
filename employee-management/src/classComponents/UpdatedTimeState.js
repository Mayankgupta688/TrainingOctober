import React from "react"

export class UpdatedTimeState extends React.Component {
    userName = "Mayank";
    userAge = 20;

    constructor() {
        super();
        this.state = {
            age: 20,
            time: this.getCurrentTime()
        }

        setInterval(() => {
            this.setState({
                age: this.state.age + 1,
                time: this.getCurrentTime() 
            })
        }, 1000)
    }

    getCurrentTime = () => {
        var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
        console.log(currentTime)
        return currentTime;
    }
    
    render() {
        return (
            <div>
                <h1>User Details: {this.userName} {this.state.age}</h1>
                <h2>Current Time: {this.state.time}</h2>
            </div>
        )
    }
} 
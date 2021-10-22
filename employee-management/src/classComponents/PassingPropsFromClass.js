import React from 'react';

// Call Force Update
// Call Set State
// Incoming Props from Parent to child data has updated

export default class PassingPropsFromClass extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Anshul Gupta",
            userAge: 10,
            userDesig: "Abc",
            age: 30,
            userInfo: {
                age: 20,
                designation: "Developer"
            }
        }
    }

    getAgeData = () => {
        alert(this.state.userInfo.age);
    }

    updateData = () => {
        // this.setState({
        //     userName: this.state.userName,
        //     userInfo: {
        //         age: 100,
        //         designation: this.state.userInfo.designation
        //     }
        // })

        // this.setState({
        //     ...this.state, 
        //     userInfo: {
        //         ...this.state.userInfo,
        //         age: 100
        //     }
        // });

        this.setState({
            ...this.state,
            userInfo: {
                ...this.state.userInfo,
                age: 100
            } 
        });
    }

    render() {
        debugger;
        return (
            <div>
                <h1>User Name is Parent Component is : {this.state.userName}</h1>
                <h2>The age of the User from Parent is  {this.state.userInfo.age}</h2>
                <h2>The designation of the User from Parent is  {this.state.userInfo.designation}</h2>
                <input type="button" value="Get Age Data" onClick={this.getAgeData} /><hr/>
                <PresentationalClass 
                    userInfo={this.state.userInfo} 
                    userNameInfo={this.state.userName}
                    updateData={this.updateData}>
                </PresentationalClass>
            </div>
            
        )
    }
}

export function PresentationalComponent(props) {
    debugger;
    return (
        <div>
            <h2>This is Data from Child Component: {props.userNameInfo}</h2>
            <h2>The age of the User from Parent is  {props.userInfo.age}</h2>
        </div>
    )
}
class PresentationalClass extends React.Component {
    render() {
        return (
            <div>
                <h2>This is Data from Child Component: {this.props.userNameInfo}</h2>
                <h2>The age of the User from Child is  {this.props.userInfo.age}</h2>
                <h2>The designation of the User from Child is  {this.props.userInfo.designation}</h2>
                <input type="button" value="Update Age" onClick={this.props.updateData} />
            </div>
        )
    }
}
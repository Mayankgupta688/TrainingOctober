import React from "react";

export class UpdatedColor extends React.Component {
    
    colors = ["Red", "Blue","Green","Yellow"];

    styleInfo = {
        color: "red",
        border: "1px solid red",
        padding: "5px",
        margin: "5px"
    }

    constructor(){
        super();
        this.state = {
            color : this.getNewColor()
        } 
   

        setInterval(function() {
            this.setState({
                color : this.getNewColor()
            })
        }
        , 2000);
    }

    getNewColor = () =>{
        debugger;
        var color = this.colors[Math.floor(Math.random() * this.colors.length)];
        return color;
    }

    render(){
        return(
            <h1 style={{
                color: this.state.color,
                border: "1px solid red",
                padding: "5px",
                margin: "5px"
            }}>Hello World</h1>
        )
    }
}

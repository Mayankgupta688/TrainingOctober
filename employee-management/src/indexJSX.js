import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    React.createElement("div", {}, 
        React.createElement("div", {}, 
            React.createElement("div", {}, [
                React.createElement("h1", {}, "This is Inner Div"),
                React.createElement("div", {}, 
                    React.createElement("div", {} , [
                        React.createElement("h2", {}, "This is Another Header" ),
                        React.createElement("img", {
                            src: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
                            alt: "TechnoFunnel",
                            style: {
                                "width": "100px",
                                "height": "100px"
                            } 
                        })
                    ])
                )
            ])
        ) 
    )
    ,document.getElementById("root"));

    
/* <div>
    <div>
        <div>
            <h1>This is Inner Div</h1>
            <div>
                <div>
                    <h2>This is Another Header</h2>
                    <img src="https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg" alt="TechnoFunnel" />
                </div>
            </div>
        </div>
    </div>
</div> */



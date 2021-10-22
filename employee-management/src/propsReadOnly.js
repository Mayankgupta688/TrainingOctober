import React from "react";
import ReactDOM from "react-dom";
import { CurrentTime } from "./components/CurrentTime";

const userDetails = {
    time: `
        ${new Date().getHours()}: 
        ${new Date().getMinutes()}: 
        ${new Date().getSeconds()}
    `,
    userName: "Anshul",
    userAge: 10,
    address: {
        street: 762873612
    }
}
Object.freeze(userDetails);
Object.freeze(userDetails.address);
const salaryArray = [10, 20, 30]
ReactDOM.render((
    <div>
        User Name is: {userDetails.userName}
        <div id="data">{salaryArray.length}</div>
        <CurrentTime userName="Anshul Gupta" userDetails={userDetails} salaryArray={[...salaryArray]}></CurrentTime>
    </div>
),  document.getElementsByClassName("my_class")[0])

setTimeout(function() {
    alert(salaryArray.length);
    alert(userDetails.userName);
    document.getElementById("data").textContent = 
        salaryArray.length;
}, 5000)


import React from "react";
import ReactDOM from "react-dom";

import { CurrentTime } from "./components/CurrentTime";

var userDetails = {
    time: `${new Date().getHours()}: ${new Date().getMinutes()}: ${new Date().getSeconds()}`,
    userName: "Anshul",
    userAge: 10
}

var salaryArray = [10, 20, 30]

ReactDOM.render((
  <CurrentTime userDetails={userDetails} salaryArray={salaryArray}></CurrentTime>
),  document.getElementsByClassName("my_class")[0])


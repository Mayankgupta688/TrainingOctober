import { useState } from "react";

export default function FormControls() {
    var [userInfo, setUserInfo] = useState({
        userName: "TechnoFunnel",
        userAge: 23,
        userSalary: 2000,
        userDesignation: "Developer"
    });

    function updateName(event) {
        setUserInfo({
            ...userInfo,
            [event.target.id]: event.target.value
        })
    }

    return(
        <div>
            <h1>User Name is: {userInfo.userName} </h1>
            <label>Enter Name</label>
            <input id="userName" type="text" value={userInfo.userName} onChange={updateName}/><br/><br/>
            <label>Enter Age</label>
            <input id="userAge" type="text" value={userInfo.userAge} onChange={updateName} /><br/><br/>
            <label>Enter Designation </label>
            <input id="userDesignation" type="text" value={userInfo.userDesignation} onChange={updateName} /><br/><br/>
            <label>Enter Salary</label>
            <input id="userSalary" type="number" value={userInfo.userSalary} onChange={updateName} /><br/><br/>
        </div>
    )
}
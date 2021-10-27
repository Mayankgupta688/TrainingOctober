import { useState } from "react";
import Axios from "axios";

export default function AddEmployee(props) {
    var [user, setUser] = useState({
        name: "",
        avatar: "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg",
        createdAt: "",
        id: 101
    });

    function updateName(event) {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    }

    function addEmployee() {
        Axios.post("http://localhost:4000/employees", user).then(() => {
            alert("Employee Added")
            props.history.push("/");
        })
    }

    return(
        <div>
            <h1>User Name is: {user.name} </h1>
            <label>Enter Name</label>
            <input id="name" type="text" value={user.name} onChange={updateName}/><br/><br/>
            <label>Enter Id</label>
            <input id="id" type="text" value={user.id} onChange={updateName} /><br/><br/>
            <label>Enter Created At </label>
            <input id="createdAt" type="text" value={user.createdAt} onChange={updateName} /><br/><br/>
            <input type="button" onClick={addEmployee} value="Add Employee" />
        </div>
    )
}
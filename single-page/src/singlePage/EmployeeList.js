import {useState, useEffect} from "react"
import "./EmployeeList.css";
import Axios from "axios";


export default function EmployeeList() {

    var [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/employees").then((response) => {
            setEmployeeList(response.data)
        })
    }, [])

    function deleteEmployee(event) {
        Axios.delete("http://localhost:4000/employees/" + event.target.name).then((response) => {
            Axios.get("http://localhost:4000/employees").then((response) => {
                setEmployeeList(response.data);
                alert("Employee Deleted....")
            })

             var filterList = employeeList.filter((employee) => {
                return employee.id !== event.target.name
            })

            setEmployeeList(filterList)
        })  
    }


    return (
        <div style={{"display": "inline"}}>
            {employeeList.map(((employee) => {
                return (
                    <div className="card">
                        <img src="https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{employee.name} - {employee.id}</h5>
                            <p className="card-text">{employee.avatar} <br/>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <input type="button" name={employee.id} className="btn btn-primary" value={"Delete " + employee.name} onClick={deleteEmployee} />
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}
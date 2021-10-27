import { Link } from "react-router-dom"
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";


export default function Headers() {
    return (
        <div>
            <h1>Employee List is given Below:</h1>

            <nav>
                <Link style={{"marginRight": "15px"}} to="/">Employee List</Link>
                <Link style={{"marginRight": "15px"}} to="/addemployee">Add Employee</Link>
            </nav>
        </div>
    )
}   
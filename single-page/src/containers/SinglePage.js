import { BrowserRouter, Route } from "react-router-dom";
import EmployeeList from "../singlePage/EmployeeList";
import Headers from "../singlePage/Header";
import AddEmployee from "../singlePage/AddEmployee";
export default function SinglePage() {
    return (
        <BrowserRouter>
            <Headers></Headers>
            <div>
                <Route exact path="/" component={EmployeeList}></Route>
                <Route exact path="/addemployee" component={AddEmployee}></Route>
            </div>
        </BrowserRouter>
    )
}
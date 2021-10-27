import { connect } from "react-redux";
import { useEffect } from "react";
import Axios from "axios";
import * as actions from "../actions/employeeActions";

function AppComponent(props) {

    useEffect(() => {
        Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            props.addEmployeeList(response.data);
        });
    }, [])
    return (
        <div style={{"display": "inline"}}>
            {props.employeeList && 
                props.employeeList.map(((employee) => {
                    return (
                        <div className="card">
                            <img src="https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{employee.name} - {employee.id}</h5>
                                <p className="card-text">{employee.avatar} <br/>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <input type="button" name={employee.id} className="btn btn-primary" value={"Delete " + employee.name} />
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    )
}

function mapStoreToProps(store) {
    return {
        employeeList: store.employees
    }
}

var ConnectedComponent = connect(mapStoreToProps, actions)(AppComponent);

export default ConnectedComponent;


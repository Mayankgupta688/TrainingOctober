export default function EmployeeReducer(employeeStore=null, action) {
    if(action.type === "AddEmployees") {
        return action.payload;
    }

    if(action.type === "DeleteAllEmployees") {
        return [];
    }

    return employeeStore;
}
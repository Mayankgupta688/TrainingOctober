export function IterateEmployees(props) {

    function displayData() {
        if(props.employeeData.length > 0) {
            return <h1>Employee List is not blank</h1>
        } else {
            return <h1>Employee List is Blank</h1>
        }
    }

    return (
        <div>
            <b>List of Employees is stated below:</b><br/><br/>

            {displayData()}

            { props.employeeData.length > 0 && (
                    <div>Employee List is greater than 0</div>
            )}

            { props.employeeData.length === 0 && (
                    <div>Employee List is 0</div>
            )}  <br/><br/>




            { props.employeeData.map((employee) => {
                return (+employee.id % 2 === 0 && employee.name.length > 0) && <div>{employee.name}</div>
            })}<br/><br/>
        </div>
    );
}

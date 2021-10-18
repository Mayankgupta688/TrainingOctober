export function CurrentTime(props) {
    debugger;
    return (
        <div>
            <h1>Welcome {props.userDetails.salary}</h1>
            <h2>User Age is: {props.userDetails.userAge}</h2>
            <h3>Current Time: {props.userDetails.time}</h3>
        </div>
    )
}
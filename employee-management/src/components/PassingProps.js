export function PassingProps(props) {
    debugger;
    return (
        <div><hr/>
            <h1>Welcome {props.userName}...</h1>
            <h2>User Age is {props.userAge}</h2>
            <h3>Sum of Number 2 and 3 is { (+props.userAge) + 200 }</h3>
            <hr/>
        </div>
    )
}

// Extract The Latest Time
// Current Time is "01:11:20"

// new Date().getHours()
// new Date().getMinutes()
// new Date().getSeconds()

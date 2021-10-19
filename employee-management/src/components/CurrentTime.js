

export function CurrentTime(props) {
    props.userDetails.address.street = "dafasuhdfsahdasihdgiasgu";
    props.salaryArray.push(100);
    return (
        <div>
            <h1>Welcome {props.userDetails.userName}</h1>
            <h2>User Age is: {props.userDetails.userAge}</h2>
            <h3>Current Time: {props.userDetails.time}</h3>
            <h4>Array Length {props.userDetails.address.street}</h4>
        </div>
    )
}
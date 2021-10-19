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


export var employeeData =    [{
      "id": "2",
      "createdAt": "2021-03-10T12:58:31.300Z",
      "name": "Delores Hyatt",
      "avatar": "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg"
    },
    {
      "id": "4",
      "createdAt": "2021-03-10T20:21:39.209Z",
      "name": "Miss Sydni Mertz",
      "avatar": "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg"
    },
    {
      "id": "8",
      "createdAt": "2021-03-11T00:11:14.957Z",
      "name": "Blanca Graham",
      "avatar": "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg"
    },
    {
      "id": "11",
      "createdAt": "2021-03-11T07:05:20.249Z",
      "name": "Emile Lueilwitz",
      "avatar": "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg"
    },
    {
      "id": "13",
      "createdAt": "2021-03-10T22:05:48.241Z",
      "name": "Jayda West",
      "avatar": "https://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpghttps://st.depositphotos.com/1594308/4626/i/950/depositphotos_46262829-stock-photo-happy-employee.jpg"
    }]
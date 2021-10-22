export function UpdatedTime() {
    var time = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    
    return (
        <div>
            <h1>Current Time is  {time}</h1>
        </div>
    )
}
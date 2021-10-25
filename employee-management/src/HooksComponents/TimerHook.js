import { useState } from "react";

function getCurrentTime() {
    var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    console.log(currentTime)
    return currentTime;
}

export default function TimerHook() {
    var [time, setTime] = useState(getCurrentTime());

    setTimeout(() => {
        setTime(getCurrentTime());
    }, 1000);

    return (
        <div>
            <h1>Current time is: {time}</h1>
        </div>
    )
}
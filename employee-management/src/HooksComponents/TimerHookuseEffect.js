import { useState, useEffect } from "react";

function getCurrentTime() {
    var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    return currentTime;
}

export default function TimerHookuseEffect() {
    var [timeInterval] = useState(null);
    var [time, setTime] = useState(getCurrentTime());
    debugger;

    useEffect(() => {
        debugger;
        clearInterval(timeInterval)
    }, [time]);

    timeInterval = setInterval(() => {
        setTime(getCurrentTime());
    }, 1000);

    console.log(time);

    return (
        <div>
            The Current Time is: {time}
        </div>
    )
}
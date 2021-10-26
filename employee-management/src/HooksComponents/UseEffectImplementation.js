import { useState, useEffect } from "react";

function getCurrentTime() {
    var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    return currentTime;
}

export default function UseEffectImplementation() {
    debugger;
    var [time, setTime] = useState(getCurrentTime());
    var [counter, setCounter] = useState(0);

    useEffect(function() {
        debugger;
        alert("Called Always")
        return () => {
            debugger
            alert("Some return function Called")
        }
    })

    useEffect(function() {
        alert("Called During Creation...")

        return () => {
            alert("Component Destroyed...")
        }
    }, [])

    useEffect(function() {
        alert("Called when Counter Updates")
    }, [counter])

    useEffect(function() {
        alert("Called once Time Update")
    }, [time])

    function updateTime() {
        setTime(getCurrentTime());
    }

    function updateCounter() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>Current time is: {time}</h1>
            <h1>Current Counter is: {counter}</h1>
            <input type="button" value="UpdateTime" onClick={updateTime} />
            <input type="button" value="Update Counter" onClick={updateCounter} />
        </div>
    )
}
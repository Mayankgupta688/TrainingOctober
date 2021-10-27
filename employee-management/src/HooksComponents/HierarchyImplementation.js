import { useState } from "react"

export default function HierarchyImplementation() {
    var [userInfo, setUserInfo] = useState({
        name: "Mayank",
        surname: "Gupta"
    });

    return (
        <div>
            <h1>Surname from top Hierarchy is : {userInfo.surname}</h1>
            <GrandParent userInfo={userInfo} setUserInfo={setUserInfo}></GrandParent>
        </div>
    )
}

function GrandParent(props) {
    return (
        <div>
            <h1>User Name is Grand Parent is XYZ</h1>
            <Parent userInfo={props.userInfo} setUserInfo={props.setUserInfo}></Parent>
        </div>
    )
}

function Parent(props) {
    return (
        <div>
            <h2>User Name is Parent is ABC</h2>
            <Child userInfo={props.userInfo} setUserInfo={props.setUserInfo}></Child>
        </div>
    )
}

function Child(props) {
    return (
        <div>
            <h3>User Name is Child is DEF</h3>
            <GrandChild userInfo={props.userInfo} setUserInfo={props.setUserInfo}></GrandChild>
        </div>
    )
}

function GrandChild(props) {

    function updateInfo() {
        props.setUserInfo({
            surname: "XYZ",
            name: "ydsuixzcgagukd"
        })
    }

    return (
        <div>
            <h4>Surname is : {props.userInfo.surname}</h4>
            <h4>Name is : {props.userInfo.name}</h4>
            <input type="button" onClick={updateInfo} value="Update Data" />
        </div>
    )
}

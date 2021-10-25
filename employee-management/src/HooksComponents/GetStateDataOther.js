import { useState } from "react";

export default function GetStateData() {
    debugger;
    var [name, setName] = useState("TechnoFunnel");

    return (
        <div>
            <h1>Hello {name}....</h1>
            <input type="button" value="Update Name" onClick={() => updateName(setName, "Ankit")} />
        </div>
    )
}

function updateName(functionReference, newValue) {
    functionReference(newValue)
}
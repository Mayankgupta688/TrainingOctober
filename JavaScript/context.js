// Context of Execution

debugger;
var name = "Mayank";
var age = 10;
var designation = "AGSKUags"

var userName = {
    name: "TechnoFunnel",
    age: 10
}

var userNameOther = {
    name: "Anshul"
}

function getData() {
    console.log(this.name)
}

console.log(this.name);

getData();

getData.apply(userName)

getData.apply(userNameOther)

console.log(this.name)

function addData(a, b) {
    return a + b;
}

addData(1, 2)


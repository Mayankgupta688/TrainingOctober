// Context of Execution

var name = "Mayank";

var userName = {
    name: "TechnoFunnel"
}

function getData(name, age) {
    console.log(this.name)
}

getData.apply(userName, ["Mayank", 10]);

getData.call(userName, "Mayank", 10);

var newNewFunction = getData.bind(userName);

getData()

newNewFunction("Mayank", 10)

newNewFunction("Mayank", 100)

console.log(this.name);

getData();

// apply, call, bind - Change Context of Execution


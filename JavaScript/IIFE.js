(
    function addDataFromBlock() {
        console.log("TechnoFunnel from Block");
    }
)()

var abc = 100;

var inputData = (function getData(name, age) {
    var name = name;
    var age = age;
    var designation = "Developer";
    var salary = "10";
    function getBonus() {
        return salary / 10;
    }

    alert(abc)

    return {
        userName: name,
        userDesignation: designation,
        age: age,
        getBonus: getBonus
    }
})("TechnoFunnel", 200);

debugger;

function addDataOutsideBlock() {
    console.log("TechnoFunnel from Block");
}

debugger;
addDataFromBlock()
addDataOutsideBlock()

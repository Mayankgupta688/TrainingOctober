// Capability of the function to remember the enviroment in which it is created....

debugger;

var data = "askhgdsakjgd"

window.name = "TechnoFunnel";

function getUserInfo() {
    debugger;
    console.log(window.name)
}

function outerFunction() {
    var name = "Mayank";
    var age = 10;

    window.otherData = "afhkdajkfasf";

    function innerFunction() {
        var name = "InnerFunction";
        var designation = "Developer";
        console.log(window.name);
        console.log(name);

        function innerInnerFunction() {

            if("Mayank" == "Mayank") {
                let userName = "sdsagdua";
                let salary = "Developer";
            }

            console.log(window.name);
            console.log(name);
            console.log(designation);
            console.log(age);
        }

        function innerInnerFunctionTwo() {
            var userName1 = "sdsagdua";
            var salary1 = "Developer";
            console.log(window.name);
            console.log(name);
            console.log(designation);
            console.log(age);
        }

        innerInnerFunction();
        innerInnerFunctionTwo();
    }

    
    console.log(window.name);
    innerFunction()
}

console.log(this)

outerFunction();
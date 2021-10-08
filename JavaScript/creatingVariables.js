var name = "Mayank Gupta";

name = 10;

name = false;

var employeeDetails = {
    name: "TechnoFunnel",
    age: 33,
    designation: "Developer",
    address: {
        street: "Rohini",
        city: "Delhi",
        country: "India"
    }, 
    toString: function() {
        alert("TechnoFunnel")
    }
}

employeeDetails.__proto__.name = "TechnoFunnel";

employeeDetails.toLocaleString()

alert(employeeDetails.__proto__.toLocalString === employeeDetails.toLocaleString);

var abc = {}


//alert(empoyeeDetails);
alert(employeeDetails.toString())
alert("Output: " + employeeDetails.__proto__.toString())

alert(empoyeeDetails.name);
alert(empoyeeDetails.address.country)

alert(empoyeeDetails["name"])
alert(empoyeeDetails["address"]["country"])

alert(empoyeeDetails["address"].city)
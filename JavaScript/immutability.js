var userDetails = {
    name: "A",
    age: 1,
    designation: "A",
    salary: 2000,
    bonus: 10,
    // 1000 more
}

// name: "A", age: 1, designation: "A"

// userDetails.name = "Mayank";

// console.log(userDetails.name)

//..............................................................

// Spread Operator

var userDetailsCopied = {
    ...userDetails,
    name: "Mayank",
    age: 100
}

//..............................................................

userDetails = {
    name: "Mayank",
    age: 1,
    designation: "A",
    salary: 3000,
    bonus: 10
}
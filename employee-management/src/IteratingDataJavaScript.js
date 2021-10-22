// Higher Order Function

// Immutability

debugger;

var data = [11, 2, 3, 44, 5, 16, 7, 8, 9];

// Seperate Odd and Even Value

// Get an array with 10 added to each of the value...

var oddValues = [];
var evenArray = [];
var updatedArray = [];

oddValues = data.filter((val) => {
    return val % 2 == 1
})

evenArray = data.filter((val) => {
    return val % 2 == 0
})

data = data.map((val) => {
    return val + 10
})

var stringData = ["Mayank", "Ankit", "Vani", "Rahul"];
var sortedArray = stringData.sort().reverse()

debugger;
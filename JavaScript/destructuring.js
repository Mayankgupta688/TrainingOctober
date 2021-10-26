// Higher Order Function

// Immutability

var data = [1, 2, 3, 4, 5];

// Add Data: 6

var [a, b, ...data] = data;

data.push(6);

var otherData = data;

alert(otherData === data);

data = [...data, 6]

alert(otherData === [...data]);

var userInfo = {
    name: "Mayank",
    age: 20,
    designation: "hgahdsa"
}

userInfo = {
    ...userInfo,
    age: 30
}

var {age, ...userInfo} = userInfo;

delete userInfo.name;

console.dir(userInfo);
console.dir(data);
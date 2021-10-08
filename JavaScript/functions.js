function add(a, b) {
    var c = a + b;
    alert(c);

    if(c % 2 == 0) {
        return "even";
    }
}

var returnValue = add(1, 5);

alert(returnValue);

var returnData = null;
returnData = add(1, 2);
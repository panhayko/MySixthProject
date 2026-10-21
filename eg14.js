function testAvailability() {
    let y = "Local variable!";
    console.log("Available here:", y);
}
testAvailability();
console.log("Not available here:", y);

function testAvailability() {
    let y = "I'll return";
    console.log("Availability here", y);
    return y;
}
let z = testAvailability();
console.log("Outside the function:", z);
console.log("Not available here:", y);


//var
function doingStuff() {
    if (true) {
        var x = "local";
    }
    console.log(x);
}
doingStuff();

//let
function doingStuff() {
    if (true) {
        let x = "local";
    }
    console.log(x);
}
doingStuff();

//function doingStuff()
{
    if (true) {
        console.log(x);
        let x = "local"; 1
    }
}
doingStuff();

function doingStuff() {
    if (true) {
        console.log(x);
        var x = "local";
    }
}
doingStuff();

//const scope
function doingStuff() {
    if (true) {
        const x = "local";
    }
    console.log(X);
}
doingStuff();

//let x = "global";
function doingStuff() {
    let x = "local";
    console.log(x);
}
doingStuff();
console.log(x);

let x = "global";
function doingStuff(x) {
    console.log(x);
}
doingStuff("param");

//recursive functions
function logRecursive(nr) {
    console.log("Started function:", nr);
    if (nr > 0) {
        logRecursive(nr - 1);
    }
    else {
        console.log("done with reursion");
    }
    console.log("Ended function:", nr);
}
logRecursive(3);

function doOuterFunctionStuff(nr) {
    console.log("Outer function");
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff(x) {
        console.log(x + 7);
        console.log("I can access outer variables:");
    }
}
doOuterFunctionStuff(2);
output
Outer function
9
I can access outer variables

//function doOuterFunctionStuff(nr) {
doInnerFunctionStuff(nr);
function doInnerFunctionStuff(x) {
    let z = 10;
}
console.log("Not accessible:", z);
}
doOuterFunctionStuff(2);

//function doOuterFunctionStuff(nr)
{
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff(x) {
        let z = 10;
    }
}
doInnerFunctionStuff(3);

//anonymous functions
function doingStuffAnonymously() {
    console.log("Not so secret though");
}


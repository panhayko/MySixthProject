function nameOfFunction() {

}
nameOfFunction();

function sayHello() {
    let you = prompt("What's your name");
    console.log("Hello", you + "!");
}

let varContainingFunction = function () {
    let varInFunction = "I'm in a function";
    console.log("hi there", varInFunction);
};
varContainingFunction();

//Exercise 6.1
function addNumbers(a, b) {
    return a + b;
}

let num1 = 15;
num2 = 25;

let result1 = addNumbers(num1, num2);
console.log(result1);

let result2 = addNumbers(50, 100);
console.log("result2");

//function tester(para1,para2)
{
    return para1 + " " + para2;
}
const arg1 = "argument 1";
const arg2 = "argument 2";
test(arg1, arg2);

function myFunc(param1, param2) {

}

function addTwoNumbers(x, y) {
    console.log(x + y);
}

//console.log("this us an argument");
prompt("argument here too");
let arr = [];
arr.push("argument");



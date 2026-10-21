let age = 10;
let cost = 0;
let message;
if (age < 3) {
    cost = 0;
    message = "Access is free under three";
}
else if (age >= 3 && age < 12) {
    cost = 5;
    message = "With the child discount, the fee is 5 dolollars";
}
else if (age >= 12 && age < 65) {
    cost = 10;
    message = "A regular ticket costs 10 dollars";
}
else {
    cost = 7;
    message = "A ticket is 7 dollars";
}
console.log(message);
console.log("Your total cost" + cost);

//Exercise 4.2
let userAgeInput = prompt("What is your age");
let age = Number(userAgeInput);
let message;
if (age >= 21) {
    message = "";
}
else if (age >= 19) {
    message = "";
}
else {
    message = "";
}
console.log(message);

//Exercise 4.3
let idVaild = true;
let message = idVaild ? "Welcome to the venue! Your ID is valid." : "Access denied! Please provide a valid ID.";
console.log(message);

//Switch Statement
switch (expenssion) {
    case value1:
        break;
    case value2:
        break;
    case value - n:
        break;
}

switch (expression) {
    case value1:
        break;
    case value2:
        break;
    case value - n:
        break;
    default:
        break;
}

//let randomNumber = Math.random();
randomNumber = randomNumber * 10;
RandonNumber = Math.floor(randomNumber);

//switch(grade)
{
    case "F":
        case "E":
    console.log("You've failed");
    break;
    case "C":
        case "B";
    console.log("You've passed");
    break;
        default:
    console.log("I don't know this grade");
}

//if(grade === "F" || grade === "D")
{
    console.log("You have failed");
}
else if (grade === "C" || grade === "B") {
    console.log("You have passes");
}
else if (grade === "A") {
    console.log("Nice");
}
else {
    console.log("I don't know this grade");
}


//Exercise 4.5
let prizeInput = prompt("Enter select a number between 0 and 10");
let prize = Number(prizeInput);
let OutputMessage = "My Selection";
let PrizeResult = "";
switch (prize) {
    case 0:
    case 1:
        prizeResult = "Sorry, no prize this time"
}

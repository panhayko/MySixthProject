//let rain = true;
if (rain) {
    console.log("Take my umbrella");
}
else {
    console.log("I can leave my umbrella");
}//

//if(age<18)
{
    console.log("We are very sorry");
}
else
{
    console.log("Welcome");
}//

//let hobby = "dancing";
if (hobby == "coding") {
    console.log("I love coding");
}
else {
    console.log("Can you teach me that");
}//

//exercise4.2
let userAge = prompt("Please enter your age");
userAge = number(userAge);
let message;

if (userAge >= 12) {
    message = "welcome";
}
else if (userAge >= 19) {
    message = "Purchase";
}
else {
    message = "Sorry , entry is defined";
}
console.log(message);


//exercise 4.3
let ID = true
let message = isValidID ? "Your ID is valid. Welcome into the venue!" : "Access denied. Your ID is invalid.";
console.log(message);

//switch(activity)
{
    case "Get up":
    console.log("It is 6am");
    break;
        case "Breakfast":
    console.log("It is 7am");
    break;
        case "lunch":
    console.log("It is 12am");
    break;
}

//while loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++)


    //let car = {
    model: "Golf",
        make: "Volkswagen",
            year: 1999,
                color: "black",
};//
for (let prop in car) {
    console.log(car[prop]);
}

let names = ["A", "B", "C"];
for (let i = 0; i < names.length; i++) {
    names[i] = "hello" + names[i];
}

let names = ["A", "B", "C"];
for (let i = 0; i < names.length; i++) {
    if (names[i]).startsWith("M")
    {

    }
}

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 4) {
        break;
    }
}

for (let i = 0; i < car.length; i++) {
    if (cars[i].year >= 2020) {
        if (cars[i].color === "black") {
            console.log("I have found my new car:", cars[i]);
            break;
        }
    }
}

while (true) {
    if (superLongArray[0] != 42 && superLongArray.length > 0) {
        superLongArray.shift();
    }
    else {
        console.log("Found 42");
        break;
    }
}






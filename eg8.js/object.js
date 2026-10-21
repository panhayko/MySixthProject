variable = "breed";
console.log(dog[variable]);

dog[variable] = "dachshund";
console.log(dog["breed"]);

//Exercise(3.4)
const myCar = {
    make: "Toyota",
    model: "Coralla",
    year: 2022,
    isElectric: false
};

let propertyName = "color";
myCar[propertyName] = "Red";

propertyName = "forsale";
myCar[propertyName] = true;

console.log("Make:", myCar.make);
console.log("Model:", myCar.model);

console.log("For Sale", myCar.forSale);


//objects in objects
let company = {
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
};

company.address.zipcode = "33116";
company["address"]["zipcode"] = "100";

//Arrays in Objects
company = {
    companyName: "Healthy Candy",
    activities: ["food manufacturing",
        "improving kids' health", "manufacturing toys"],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
};

let activity = company.activities[1];

//Objects in Arrays
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
},
{
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
}];

let streetName = address[0].street;

//Objects in arrays in objects
company = {
    companyName: "Healthy Candy",
    activities: ["food manufacturing",
        "improving kids' health",
        "manufacturing toys"],
    address: [{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    }],
    yearOfEstablishment: 2021
};

let streetName = company.address[0].street;

//Differences 
//Arrays in Objects - Object -> Array -> index
//Objects in Arrays - Arrays -> Index -> ObjectProperty
//Objects in Objects - Object -> Object -> Property
//Objects in arrays in objects - Objects -> Array -> Index -> Object Property

//Exeercise 3.5
const people = { friend: [] };
const friend1 = {
    firstName: "Aung",
    lastName: "Kyaw",
    id: 101
};

const friend2 = {
    firstName: "Su",
    lastName: "Myat",
    id: 102
};

const friend3 = {
    firstName: "Htet",
    lastName: "Aung",
    id: 103
};

people.friend.push(friend1, friend2, friend3);
console.log(people);

//company product catalog
let inventory = [];
let item1 = {
    name: "laptop",
    model: "MacBook Air",
    cost: 1200,
    quantity: 5
};

let item2 = {
    name: "Smartphone",
    model: "Galaxy A37",
    cost: 400,
    quantity: 10
};

let item3 = {
    name: "Headphones",
    model: "Sony WH-1000XM4",
    cost: 300,
    quantity: 7
};

inventory.push(item1, item2, item3);
console.log("Full inventory:", inventory);

letThirdItemQuantity = inventory[2].quantity;
console.log("Third item Quantity", thirdItemQuantity);

let Item4 = {
    name: "Tablet",
    model: "ipad Air",
    cost: 600,
    quantity: 4
};

inventory.push(item4);

console.log("First item name:", inventory[0].name);
console.log("Updated Inventory:", inventory);

//Can you use const and update values within an array? can or cannot
//It can.

//Which property in an array gives the number of items contained in the array?
Length property
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length);
output: 3

//const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));// output: -1
console.log(myArr1.indexOf(3));//output:1 

//myArr = [1,3,5,6,8,9,15]
myArr[1] = 4
myArr = [1, 4, 5, 6, 8, 9, 25]

//const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2); // [<10 empty items>, 'test']
console.log(myArr2[2]);//undefined

//const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort(); // [3,3,6,8,9,55,434,553];
myArr3.length = 0;
console.log(myArr3[0]); //output: undefined
bcz myArr3.length = 0; so that no[]












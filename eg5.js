//[1,2,3] = Array
//1,2,3 = index and 1 is index = 0 

//exercise(3.3)
let originalArray = [1, 2, 3];

let nestedArray = [originalArray, originalArray, originalArray];
let nestedArray = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

console.log(nestedArray[0][1]);
output
2

//array = 0,1,2,3
//object = color , weight, breed

typeof arr(Object)

let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true
};

let dog = { color: "brown", age: 3 };
console.log(dog.color);

let variable = "color";
console.log(dog[variable]);

let variable = "age";
console.log(dog[variable]);

//exercise 3.4
let myCar =
{
    make: "toyata",
    model: "Corolla",
    year: 2022,
    color: "silver",
    forsale: false
};

let variable = "color";
myCar[variable] = "red";

variable = "forsale";
myCar[variable] = "true";

console.log("Make", myCar.make);
console.log("Model", myCar.Model);
console.log("For Sale:", myCar.forSale);


//Working with objects and arrays
//exercise 3.5
let people = { friends: [] };
let friend1 = {
    firstName: "Aung",
    lastName: "Kyaw",
    id: 1
}
people.friends.push(friend1, friend2, friend3);
console.log(people);

//
["FIRST", "SVEKIS", "MIDDLE", "hello World", "LAST"]

myArray.shift();
myArray.pop();
["SVEKIS", "MIDDLE", "hello World"]

myArray.unshift("First");
["First", "SVEKIS", "MIDDLE", "hello World"]

myArray[3] = "hello world";
myArray[2] = "MIDDLE";

myArray.push("LAST");

console.log(myArray);

//const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));
PS: [] array
    () CSSMathValue
output
array[-1]
array[1]

//[1,3,5,6,8,9,15]
myArr[1] = 4;

//const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);
console
console.log(myArr2);[< 10 empty items >, 'test']
length = 11
console.log(myArr2[2]); undefined

//const myArr3 = [3,6,8,9,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);

output
undefined because myArr3.length = 0;










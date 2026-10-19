arr3 = new Array(10);
arr4 = [10];

let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);
output
String
Number
Boolean

const arr = ["hi there"];
arr[0] = " new value";
console.log(arr[0]);
arr = ["nope, now you aare overwriting the array"];
output
new CSSMathValue

cars = ["Toyata", "Renault", "Volkswagen"];
console.log(cars[0]);
Toyata
console.log(cars[1]);

cars[0] = "Tesla";
console.log(cars[0]);
output - Tesla
console.log(cars);
['Tesla', 'Renault', 'Volkswagen']

cars[3] = "Kia";
cars[-1] = "Fiat";
console.log(cars[3]);
console.log(cars[-1]);
output
Kia
Fiat

colors = ["black", "orange", "pink"];
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);
output
Length of colors: 3
Length of booleans: 4
Length of empty array: 0


numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);
console.log("numbers", numbers);

numbers[12, 24, 36,< 2 empty items >, 48]

//exercise 3.1
let shoppingList = ["Milk", "Bread", "Apples"];
console.log(shoppingList.length);
output = 3
shoppinglist[1] = "Bananas";
console.log(shoppingList);
output
["Milk", "Bananas", "Apples"];

favouriteFruits = ["grapefruit", "orange", "lemon"];
favouriteFruits.push("tangerine");
let lengthofFavouriteFruits = favouriteFruits.push("lime");
console.log(favouriteFruits);
output
['grapefruit', 'orange', 'lemon', 'tangerine', 'lime']

//certain index
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);
[2 = to cut from this, 0 = to cut how pieces]
output
[
    'circle',
    'triangle',
    'square',
    'trapezoid',
    'rectangle',
    'pentagon'
]

arrOfShapes.splice(2, 2, "square", "trapezoid");
console.log(arrOfShapes);
output
['circle', 'triangle', 'square', 'trapezoid']

arrOfShapes.splice(2, 12, "square", "trapezoid");
console.log(arrOfShapes);
output
['circle', 'triangle', 'square', 'trapezoid']

//concat() means combining
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
output
[1, 2, 3, 4, 5, 6]

let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);
output
[1, 2, 3, 4, 5, 6, 7, 8, 9]

//pop() means cutting the last one
[1, 2, 3, 4, 5, 6, 7, 8, 9]
arr8.pop();
output
[1, 2, 3, 4, 5, 6, 7, 8]
//shift() means cutting the first one
arr8.shift();
output
[2, 3, 4, 5, 6, 7, 8]

arr8.splice(1, 3);
output
[2, 6, 7, 8]

delete arr8[0];
[< 1 empty item >, 6, 7, 8]

//find() means determaining if it is true or not and then output for the first number.
//if it does not find ,  output for the undefined.

//indexOf() means finding the value where it is than itself value.
//It takes the first one whether it has more similar values.
//If it does not find , it outputs for the -1.


//lastIndexof() means the similar with the indexOf() but it finds from the behind number of array.
//if it have more values , it outputs for the behind number.

let animals = ["dog", "house", "cat", "cow", "dog"];
let last dog = animals.lastIndexOf("dog");

//sorting means putting the numbers or alphabets changing the A TO Z.
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
output
['Alicia', 'Bert', 'Fatiha', 'James', 'Maria']

let ages = [18, 72, 33, 56, 40];
ages.sort();
output
['18', '33', '40', ' 56', '72']


//Reversing means changing the last one to the first one.
['Alicia', 'Bert', 'Fatiha', 'James', 'Maria']
names.reverse();
['Maria', 'James', 'Fatiha', 'Bert', 'Alicia']


//Exercise 3.2
let shoppingList = [];

shoppingList.push("milk", "Bread", "Apples");
console.log(shoppingList);
output
["milk", "Bread", "Apples"]

shoppingList.splice(1, 1, "Bananas", "Egg");
console.log(shoppingList);
output
["Milk", "Bannas", "Egg", "Apples"]

shoppingList.pop();
console.log(shoppinglist);
output
["Milk", "Bananas", "Egg"]

shoppinglist.sort();
console.log(shoppinglist);
output
["Bananas", "Egg", "Milk"]

shoppinglist.indexof("MILK");
console.log("milkIndex");
output
2

shoppinglist.splice(1, 0, "carrots", "lettue");
console.log(shoppinglist);
output
["Bananas", "carrots", "lettue", "Egg", "Milk"]

let newList = ["Juice", "Pop"];

let combinedList = shoppingList.concat(newList, newList);
console.log("CombinedList");
output
["Bananas", "carrots", "lettue", "Egg", "Milk", "Juice", "Pop", "Juice", "Pop"]

let lastPopIndex = combinedList.lastIndexOf("Pop");
console.log("LastPopIndex");
output
8




















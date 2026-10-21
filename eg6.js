//map()
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
console.log(numbers);
output
console.log(doubled); // [2,4,6,8]
console.log(numbers); // [1,2,3,4]

//filter()
const numbers = [1, 2, 3, 4, 5];
const greaterThanTwo = numbers.filter(num => num > 2);
console.log(greaterThanTwo);
output
[3, 4, 5]

//forEach()
const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => { console.log(fruit) });
output
apple
banana
originAgentCluster

//find()
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 10);
console.log(found);
output
12

//push()
//pop()
const colors = ["red", "green"];
colors.push("blue");
console.log(colors);
output
["red", "green", "blue"];

colors.pop();
console.log(colors);
output
["red", "green"];

//every()
const ages = [20, 25, 30];
const allAdults = ages.every(age => age >= 18);
console.log(allAdults);
output
true
const hasThirty = ages.some(age => age === 30);
console.log(hasThirty);
output
true

const numbers = [1, 2, , 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
output
10

//shift & unshift
const animals = ["cat", "dog"];
animals.unshift("lion");
console.log(animals);
output
["lion", "cat", "dog"];

animals.shift();
console.log(animals);
output
["cat", "dog"]




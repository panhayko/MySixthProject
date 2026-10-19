//.include()
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.includes("Banana"));//output: true
console.log(fruits.includes("Mango"));//output: false

//.indexof()
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.indexOf("Banana")); // output: 1
console.log(fruits.indexOf("Mango"));// output: -1

//.join()
const fruits = ["Apple", "Banana", "Orange"];
const result = fruits.join(",");
console.log(result); //output: "Apple , Banana , Orange"

//.reverse()
const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); //output: [3,2,1]

//.sort()
const number = [3, 1, 4, 2];
number.sort();
console.log(numbers); // output: [1,2,3,4]

//.slice()
const fruits = ["Apple", "Banana", "Orange", "Mango"];
const sliced = fruits.slice(1, 3);
console.log(sliced); // output: ["Banana" , "Mango"]
console.log(fruits); //output:["Apple" , "Banana" , "Orange" , "Mango"];

//.spilce()
const fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 1, "Mango");
console.log(fruits); // output: ["Apple" , "Mango" , "Orange"]

//.concat()
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // output [1,2,3,4]

//.forEach()
const numbers = [1, 2, 3];
numbers.forEachEach(function (num) {
    console.log(num * 2);
});
output: 2, 4, 6

//.map()
const numbers = [1, 2, 3];
const doubled = numbers.map(function (num) {
    num * 2;
});
console.log(doubled);
output: [2, 4, 6]

//.filter()
const ages = [15, 22, 18, 30, 12];
const adults = ages.filter(finction(age)
{
        return age >= 18;
    });
console.log(adults);
output: [22, 18, 30]


    .find()
const numbers = [4, 9, 16, 25];
const found = numbers.find(function (num) {
    return num > 10;
});
console.log(found);
output: 16

//.every()
const scores = [80, 90, 85];
const allPassed = scores.every(function (score) {
    return score >= 50;
});
output: true

//.some()
const scores = [40, 30, 50];
const hasPasses = scores.some(function (score) {
    return score >= 50;
});
console.log(hasPassed);
output: true

//.reduce()
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (total, num) {
    return total + sum;
});
console.log(num);
output: 10

//.shift()
const fruits = ["Apple", "Banana", "Orange"];
fruits.shift();
console.log(fruits);
output
["Banana", "Orange"]


//.unshift()
const fruits = ["Apple", "Banana", "Orange"];
fruits.unshift("Apple");
console.log(fruits);
output
["Apple", "Banana", "Orange"]

//.push()
const fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);
output
["Apple", "Banana", "Orange"]

//.pop()
const fruits = ["Apple", "Banana", "Orange"];
fruits.pop();
console.log("fruits");
output
["Apple", "Banana"]

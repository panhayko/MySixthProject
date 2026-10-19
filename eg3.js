console.log("Hello world!");
//let a = 10;//
//console.log(a);//

prompt("Please enter your name:");

Math.random();
console.log(Math.random());
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));

//console.log("Enter your name:");//
/* Name: Alex
*/
//console.log("Hello world!");//


variable
firstname = "Alex";
x = 2;

firstname = "Alex";
x = 7;

let firstname = "Alex";
firstname = "John";

let nr1 = 12;
var nr2 = 8;
const PI = 3.14;

let singleString = 'Hello, World!';
let doubleString = "Hello, World!";

let str = "Hello,what's your name? Is it\"Mike\"?"
console.log(str);
let str2 = 'Hello,what\'s your name? Is it"Mike"?'
console.log(str2);

let str3 = "New \nString";
let str4 = "I'm containing a backslash:\\";
console.log(str3);
console.log(str4);

let intNr = 1;
let decNr = 1.5;
let expNr = 2.5e3;
let octNr = 0o12; // decimal version would be 8
let hexNr = 0x1A;//decimal version would be 1000
let binNr = 0b1010;//decimal version would be 5

let intNr2 = 3434;
let intNr3 = 1234;

let decNr2 = 3.14;
let binNr2 = 0b1100;

let bigNr = 12345678901234567890n;

let result = bigNr + intNr;

let bool1 = false;
let bool2 = true;
let objectIdDeleted = false;
let lightIsOn = true;


let str1 = "JavaScript is fun";
let str2 = "JavaScript is fun";
console.log("These two strings are the same: ", str1 === str2);

let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("These two symbols are the same: ", sym1 === sym2);

let unassigned;
console.log(unassigned);
let terribleThingToDo = undefined;
console.log(terribleThingToDo);

let empty = null;
console.log(empty);

let terribleThingToDo = undefined;
let lastName;
console.log("Same undefined: ", lastName === terribleThingToDo);

let betterOption = null;
console.log("Same null: ", betterOption === empty);

let str = "Hello, World!";
let nr = 7;
let bigNr = 12345678901234567890n;
let bool = true;
let sym = Symbol("id");
let undef = undefined;
let unknown = null;

let strToNr = " ";
strToNr = Number(strToNr);
console.log("empty string to number: ", strToNr);


let str1 = 'laurence';
console.log(typeof str1);
let str2 = 'svekis';
console.log(typeof str2);
let val1 = undefined;
console.log(typeof val1);
let val2 = null;
console.log(typeof val2);
let myNum = 1000;
console.log(typeof myNum);

let nr1 = 12;
let nr2 = 14;
let result1 = nr1 + nr2;

let str1 = "Hello";
let str2 = "addition";
let result2 = str1 + str2;

let nr1 = 20;
let nr2 = 4;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 - nr2;
let result2 = str1 - nr3;
console.log(result1, result2);

result1 = 16;
result2 = NaN; (bcz, Hi is not the number)
console.log(16, NaN);

** means double
let nr1 = 2;
let nr2 = 3;
let result1 = nr1 ** nr2;
console.log(result1);
8

//modulus
let nr1 = 5;
let nr2 = 2;
let result1 = nr1 % nr2;
console.log(result1);

let nr1 = 4;
nr1++
console.log(nr1);
5

let nr2 = 4;
nr2--;
console.log(nr2);
3

let nr = 2;
console.log(nr++); 2
console.log(++nr)    3
console.log(nr); 3

let nr1 = 4;
let nr2 = 5;
let nr3 = 2;
console.log(nr1++ + ++nr2 * nr3++);
16( * first)


let a = Number(prompt("Enter a number:"));
let b = Number(prompt("Enter another number:"));
let c = Math.sqrt((a * a + b * b));
console.log("The length of the hypotenuse is: " + c);
alert("The length of the hypotenuse is: " + c);

let x = 2;
x += 2; (x = x + 2)
console.log(x);
4

x -= 2; (x = x - 2)
console.log(x);
2

x *= 6; (x = x * 6)
console.log(x);
12

x /= 3; (x = x / 3)
console.log(x);
4

x **= 2;
console.log(x);
16

x %= 3;
console.log(x);
1

a += b;
a /= c;
c = c %= b;

let x = 5;
let y = "5";
console.log(x == y);
log true, loose equality

log false
console.log(x === y);

let x = 5;
let y = "5";
console.log(x != y); false
console.log(x !== y); true

let x = 5;
let y = 6;
console.log(y > x); true
console.log(y < x); false
console.log(y >= x); true
console.log(y <= x); false

let x = 1;
let y = 2;
let z = 3;
console.log(x < y && y < z);
console.log(x > y || y < z);
console.log(x > y || y > z);

let x = false;
console.log(!x);

let x = 1;
let y = 2;
console.log(!(x < y));
The expression evaluates to true
!means false to the console.


























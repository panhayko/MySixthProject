//while loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//let someArray = ["Mike", "Antal", "Marc", "Emir", "Lotus"];
let notFound = true;
while (notFound && someArray.length > 0) {
    if (someArray[0] === "Lotus") {
        console.log("Found her");
        notFound = false;
    }
    else {
        SomeArray.shift();
    }
}

//let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];
while (fibonacciArray.Length < 25) {
    fibonacciArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;
}

//let number;
do {
    number = prompt("Please enter a number between 0 and 100");
} while (!(number >= 0 && number < 100));

//for(let i = 0; i < 10;i++)
{
    console.log(i);
}

//let arr = [];
for (let i = 0; i < 100; i++) {
    Array.push(i);
}

//Exercise 5.3
const myWork = [];
for (let i = 1; i <= 10; i++) {
    let status = i % 2 === 0 ? true : false;
    let lesson = {
        name: 'lesson ${i}',
        status: status
    };
    myWork.push(lesson);
}
console.log(myWork);

//let arrayOfArrays =[];
for (let i = 0; i < 3; i++) {
    arrOfArray.push([]);
    for (let j = 0; j < 7; j++) {
        arrOfArrays[i].push(j);
    }
}
console.log(arrOfArrays);
console.table(arrOfArrays);

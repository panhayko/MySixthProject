//let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//let name = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith("M")) {
        delete names[i];
        continue;
    }
    names[i] = "hello" + names[i];
}
console.log(names);

//let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++) {
    names.push("...")
}

//let names =["Chantal" , "John" , "Maxime" , "Bobbi" , "Jair"];
for (let name of names) {
    console.log(name);
}

let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};
for (let prop in car) {
    console.log(car[prop]);
}
Output
Golf, Volkswagen, 1999, black

for (let prop in car) {
    console.log(prop);
}
Output
model, make, year, color

//Exercise 5.7
let student = {
    name: "Mg Mg",
    age: 20,
    grade: "First year"
};
for (let prop in person) {
    console.log(person[prop]);
}
let personArray = ["Aung Aung", 25, "Yangon"];
for (let i = 0; i < personArray.length; i++) {
    console.log(personArray[i]);
}

let arrKeys = Object.keys(car);
console.log(arrKeys);
for (let key of Object.key(car)) {
    console.log(key);
}
for (let key of Object.values(car)) {
    console.log(key);
}
let arrKeys = Object.keys(car);
for (let i = 0; i < arrKeys.length; i++) {
    console.log(arrKeys[i] + ":" + car[arrKeys[i]]);
}

let arrEntries = Object.entries(car);
console.log(arrEntries);

for (const [key, value] of Object.entries(car)) {
    console.log(key, ":", value);
}
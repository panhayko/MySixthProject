//map()

const users = [{ name: "AUNG AUNG", age: 20 },
{ name: "Mya Mya", age: 22 }
];
const names = users.map(user => user.name);
console.log(names);
output
["Aung Aung", "Mya Mya"]

const users = [{ name: "Aung Aung", age: 20 },
{ name: "Mya Mya", age: 22 },
{ name: "Kyaw Kyaw", age: 25 }
];
const adults = users.filter(user => user.age >= 21);

console.log(adults);

output
[
    { name: "Mya Mya", age: 22 },
    { name: "Kyaw Kyaw", age: 25 }
]

//find()
const users = [
    { id: 1, name: "Aung Aung" },
    { id: 2, name: "Mya Mya" },
    { id: 3, name: "Kyaw Kayw" }
];

const targetUser = user.find(users => user.id === 2);
console.log(targetUser);
output
{ id: 2, name: " Mya Mya" }

//reduce()
const cart = [
    { item: "Pen", price: 500, qty: 2 },
    { item: "Book", price: 2000, qty: 1 }
];
const totalPrice = cart.reduce((total, product) => total + (product.price * product.qty), 0);
console.log(totalPrice);
output
3000


//some()
const products = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false },
    { name: "Keyboard", inStock: true }
];

const hasOutOfStock = products.some(product => !product.instock);
console.log(hasOutOfStock);
output
true

//every()
const students = [
    { name: "Aung Aung", passed: true },
    { name: "Mya Mya", passed: true }
];

const allPassed = students.every(student => student passed);
console.log(allPassed);
output
true

//forEach()
const users = [
    { name: "Aung Aung", role: "Developer" },
    { name: "Mya Mya", role: "Designer" }
];

output
Aung Aung is a Developer
Mya Mya is a Designer

//sort()
const users = [
    { name: "Aung Aung", age: 25 },
    { name: "Mya Mya", age: 20 },
    { name: "Kyaw Kyaw", age: 30 }
];

users.sort((a, b) => a.age - b.age);
console.log(users);
output
[
    { name: "Mya Mya", age: 20 },
    { name: "Aung Aung", age: 25 },
    { name: "Kyaw Kyaw", age: 30 }
]

//map() & reduce()
const cart = [
    { item: "Shoes", price: 50 },
    { item: "Shirt", price: 30 },
    { item: "Hat", price: 20 }
];

const totalPrice = cart.map(product => product.totalPrice)
    .reduce((sum, price) => sum + price, 0);
console.log(totalPrice);

//map() & reduce()
const cart = [
    { item: "Shoes", price: 50 },
    { item: "Shirt", price: 30 },
    { item: "Hat", price: 20 }
];

const totalPrice = cart.map(product => product.price)
    .reduce((sum, price) => sum + price, 0);
console.log(totalPrice);
output
100





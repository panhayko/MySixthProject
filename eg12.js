let cars = [
    {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black",
    },
    {
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "red",
    },
    {
        model: "Peugeot",
        make: "208",
        year: 2021,
        color: "black",
    },
    {
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "black",
    }
];

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 4) {
        break;
    }
}

for (let i = 0; i < cars.length; i++) {
    if (cars[i].year >= 2020) {
        if (cars[i].color === "black") {
            console.log("I have found my new car:", cars[i]);
            break;
        }
    }
}

while (true) {
    if (superLongArray[0] != 42 && superLongArray.Length > 0) {
        superLongArray.shift();
    }
    else {
        console.log("Found 42!");
        break;
    }
}

while (superLongArray.length > 0 && notFound) {
    if (superLongArray[0] != 42) {
        superLongArray.shift();
    }
    else {
        console.log("Found 42!");
        notFound = false;
    }
}

for (let car of cars) {
    if (car.color !== "black") {
        continue;
    }
    if (car.year >= 2020) {
        console.log("We could get this one:", car);
    }
}

//let i = 1;
while (i < 50) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
    i++;
}

let i = 1;
while (i < 50) {
    i++;
    if ((i - 1) % 2 === 0) {
        continue;
    }
    console.log(i - 1);
}

for (let i = 1; i < 50; i = i + 2) {
    console.log(i);
}//

let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
];


for (let i = 0; i < groups.length; i++) {
    let matches = 0;
    for (let j = 0; j < groups[i].length; j++) {
        if (groups[i][j].startWith("M")) {
            matches++;
        }
        else {
            continue;
        }
        if (matches === 2) {
            console.log("Found a group with two names");
            console.log(group[i]);
            break;
        }
    }
}

for (let group of groups) {
    for (let member of group) {
        if (member.startWith("M")) {
            console.log("Found one starting with M:", member);
            break;
        }
    }
}

outer:
for (let group of groups) {
    inner:
    for (let member of group) {
        if (member.startwith("M")) {
            console.log("Found one starting with M", member);
            break outer;
        }
    }
}
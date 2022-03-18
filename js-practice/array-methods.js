// Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.
// Examples:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
function camelize(str) {
    return str
    .split("-").filter(word => word)
    .map((word, index) => index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1, word.length).toLowerCase())
    .join("")
}


// Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.
// For instance:
function filterRange(arr, a, b) {
    return arr.filter(num => (num >= a && num <= b))
}
let arr1 = [5, 3, 8, 1];
let filtered = filterRange(arr1, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr1 ); // 5,3,8,1 (not modified)


// Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.
function filterRangeInPlace(arr, a, b) {
    return arr.filter(num => (num >=a && num <= b))
}
let arr2 = [5, 3, 8, 1];
arr2 = filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
alert( arr2 ); // [3, 1]


// Sort in decreasing order
let arr3 = [5, 2, 1, -10, 8];
arr3.sort( (a,b) => b-a )
alert( arr3 ); // 8, 5, 2, 1, -10


// Copy and sort array
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.
function copySorted(arr4) {
    return arr4.slice().sort()
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)


// Create an extendable calculator
// Create a constructor function Calculator that creates “extendable” calculator objects.
// The task consists of two parts.
// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
function Calculator() {

    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function(strOp) {
        let arrayOp = strOp.split(" ")
        return this.methods[arrayOp[1]](Number(arrayOp[0]), Number(arrayOp[2]))
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func
    }
}
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
// Second, add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.
// For instance, let’s add the multiplication *, division / and power **:
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8


// Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(user => user.name)
alert( names ); // John, Pete, Mary


// Map to objects
// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };
let users1 = [ john1, pete1, mary1 ];
let usersMapped = users1.map(user => {
    return {fullName: `${user.name} ${user.surname}`,
            id: user.id}
})
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith


// Sort users by age
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
let john4 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary4 = { name: "Mary", age: 28 };
let arr4 = [ pete4, john4, mary4 ];
function sortByAge(arr4) {
    arr4.sort((a, b) => a.age - b.age)
}
sortByAge(arr4);
// now: [john, mary, pete]
alert(arr4[0].name); // John
alert(arr4[1].name); // Mary
alert(arr4[2].name); // Pete


// Shuffle an array
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:
function shuffle(arr) {
    arr.sort((a, b) => a*Math.random() - b*Math.random())
}
let arr5 = [1, 2, 3];
shuffle(arr5);
// arr = [3, 2, 1]
shuffle(arr5);
// arr = [2, 1, 3]
shuffle(arr5);
// arr = [3, 1, 2]


// Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.
let john6 = { name: "John", age: 25 };
let pete6 = { name: "Pete", age: 30 };
let mary6 = { name: "Mary", age: 29 };
let arr6 = [ john6, pete6, mary6 ];
function getAverageAge(arr) {
    return arr.reduce((sum, num) => sum + num.age, 0) / arr.length
}
alert( getAverageAge(arr6) ); // (25 + 30 + 29) / 3 = 28


// Filter unique array members
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
function unique(arr) {
    let unique = []
    for (let value of arr) {
        if (!unique.includes(value)) {
            unique.push(value)         
        }
    }
    return unique
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(strings) ); // Hare, Krishna, :-O


// Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
function groupById(arr) {
    let result = {}
    for (let user of arr) {
        result[user.id] = user
    }
    return result
}
function groupById(arr) {
    return arr.reduce((obj, user) => {
        obj[user.id] = user
        return obj
    }, {})
}
let users7 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
let usersById = groupById(users7);
/*
// after the call we should have:
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
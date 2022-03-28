// The sum of a range
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
function range(start, end, inc = start < end ? 1 : -1) {
    let arr = []
    for (let i = start; inc > 0 ? i <= end : i >= end; i += inc ) {
        arr.push(i)
    }
    return arr
}
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
function sum(arr) {
    return arr.reduce( (sum, num) => sum + num )
}
// Run the example program and see whether it does indeed return 55.
console.log(sum(range(1, 10)));


// Reversing an array
// Write a function reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
function reverseArray(arr) {
    let arrReversed = []
    arr.forEach((element, index, array) => {
        arrReversed[index] = array[array.length - index - 1]
    });
    return arrReversed
}
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 
function reverseArrayInPlace(arr) {
    let arrCopy = arr.slice()
    arrCopy.forEach((element, index, array) => {
        arr[index] = array[array.length - index - 1]
    });
}
// Tests
console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]


// A list
// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
// Also write a listToArray function that produces an array from a list. 
// Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
function arrayToList(arr) {
    if (arr.length === 1) {
        return {
            value: arr[0],
            rest: null
        }
    } else {
        return {
            value: arr[0],
            rest: arrayToList(arr.slice(1))
        }
    }
}
function listToArray(list) {
    if (list.rest === null) {
        return [list.value]
    } else {
        return [list.value, ...listToArray(list.rest)]
    }
}
function prepend(element, list) {
    return {
        value: element,
        rest: list
    }
}
function nth(list, ind) {
    for (let i = 0; i < ind; i++) {
        if (list.rest === null) {
            return undefined
        }
        list = list.rest
    }
    return list.value
}
function findListIndex(list, num) {
    let ind = 0;
    do {
        if (list.value === num) {
            return ind    
        }
        else if (list.rest === null) {
            return undefined
        }
        else {
            list = list.rest
            ind++
        }
    } while (true)
}
// Test
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


//Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
function deepEqual(x, y) {
    if (typeof x === "object" && typeof y === "object") {
        // Check if keys are equal
        let keysX = Object.keys(x).sort()
        let keysY = Object.keys(y).sort() 
        let isKeyEqual = keysX.join() === keysY.join()
        // Check if values are equal
        let isValEqual = keysX.every(key => {
            if (typeof x[key] === "object" && typeof y[key] === "object") {
                return deepEqual(x[key], y[key])
            } else {
                return x[key] === y[key]
            }      
        })
        return isKeyEqual && isValEqual
    } else {
        // Compare directly if both are not object types
        return x === y  
    }
}
// Test
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
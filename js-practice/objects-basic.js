/* 
Hello, object
importance: 5
Write the code, one line for each action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/
let user = {
  name: 'John',
  surname: 'Smith'
}
user.name = 'Pete'
delete user.name


/*
Check for emptiness
importance: 5
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
Should work like that:
*/
function isEmpty(obj) {
  return Object.keys(obj).length === 0
}


/*
Sum object properties
importance: 5
We have an object storing salaries of our team:
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0.
*/
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0
for (let keys in salaries) {
  sum += salaries[keys]
}
console.log(sum)


/*
Multiply numeric property values by 2
importance: 3
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
P.S. Use typeof to check for a number here.
*/
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};
function multiplyNumeric(obj) {
  for (let keys in obj) {
    typeof obj[keys] === 'number' ? obj[keys] *= 2 : obj[keys] 
  } 
}
multiplyNumeric(menu)
console.log(menu)
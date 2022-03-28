/*
Using "this" in object literal
importance: 5
Here the function makeUser returns an object.
What is the result of accessing its ref? Why?
*/
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();
alert( user.ref.name ); // What's the result?
// Error since ref is not the user object


/*
Create a calculator
importance: 5
Create an object calculator with three methods:
read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/
let calculator = {
  read() {
    this.x = +prompt("Enter a number:")
    this.y = +prompt("Enter another number:")
  },
  sum() {
    return this.x + this.y
  },
  mul() {
    return this.x * this.y
  }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


/*
Chaining
importance: 2
There’s a ladder object that allows to go up and down:
Now, if we need to make several calls in sequence, can do it like this:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Modify the code of up, down and showStep to make the calls chainable, like this:
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
Such approach is widely used across JavaScript libraries.
*/
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this
  }
};
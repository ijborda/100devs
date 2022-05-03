// // A Vextor type

// class Vec {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
//   plus(other) {
//     return new Vec(this.x +(other).x, this.y +(other).y)
//   }
//   minus(other) {
//     return new Vec(this.x -(other).x, this.y -(other).y)
//   }
//   get length() {
//     return Math.sqrt(this.x**2 + this.y**2)
//   }
// }
// // Test
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5


// // Groups
// class Group {
//   constructor(arr) {
//     this.arr = []
//   } 
//   delete(val) {
//     if (this.has(val)) {
//       let ind = this.arr.indexOf(val)
//       this.arr.splice(ind, 1)
//     } 
//   }
//   add(val) {
//     if (!this.has(val)) {
//       this.arr.push(val)
//     } 
//   }
//   has(val) {
//     return this.arr.includes(val)
//   }
//   static from(iter) {
//     let group = new Group;
//     for (let val of iter) {
//       group.add(val);
//     }
//     return group
//   }
// }
// // Test
// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// // → false


// Borrowing a method
let map = {one: true, two: true, hasOwnProperty: 1};
console.log(Object.prototype.hasOwnProperty.call(map, 'one'))

// const hasOwnProperty = Symbol("hasOwnProperty");
// map[hasOwnProperty] = 1
// console.log(map.hasOwnProperty("one"), map[hasOwnProperty]);
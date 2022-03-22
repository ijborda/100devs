// function binarySearch(array, value, low, high) {
//     if (high <= low) {
//         return -1;
//     } else {
//         var mid = Math.floor((low + high)/2);
//         if (array[mid] > value) {
//             return binarySearch(array, value, low, mid);
//         } else if (array[mid] < value) {
//             return binarySearch(array, value, mid+1, high);
//         } else {
//             return mid;
//         }
//     }
// }
// // var input = document.getElementById('stdin').value.split("\n");
// // var converted = [];
// // for(var x in input){
// //     converted.push(parseInt(split[x]));
// // }
// // converted.reverse()
// // array = [];
// // for(var i=0; i<10000; i++){
// //     array.push(converted.pop());
// // }
// // for(var i=0; i<10000; i++){
// //     var value = converted.pop();
// //     var answer = binarySearch(array, value, 0, 9999);
// //     console.log(answer);
// // }

// let array = document.querySelector("#stdin").innerHTML.split("\n").filter(a => a).map(a => Number(a))
let output = document.querySelector("#output")
// let input = array.splice(10000,20000,"")
// let ans = []
// array.pop()
// for(var i=0; i<10000; i++){
//     var answer = binarySearch(array, input[i], 0, 9999);
//     output.innerHTML += answer + "<br>"
//     ans.push(answer)
// }

var bitmask;
var characters;
var running;
function permutations() {
    var i;
    if(running.length == characters.length) {
        if ("egimvwx".split("").every( char => running.join('').includes(char))) {
                        console.log(running.join(''))
                        output.innerHTML += running.join('') + "<br>"
                    }
    } else {
    for(i=0; i<characters.length; i++) {
            if ( ((bitmask>>i)&1) == 0 ) {
                running.push(characters[i]);
                bitmask |= (1>>1);
                permutations();
                running.pop();
            }
        }
    }
}
var input = "egimvwx";
characters = input.split('');
running = [];
bitmask = 0;
permutations();


// var bitmask;
// var characters;
// var running;
// function permutations() {
//     var i;
//     if(running.length == characters.length) {
//         if ("abc".split("").every( char => running.join('').includes(char))) {console.log(running.join(''))}
//     } else {
//     for(i=0; i<characters.length; i++) {
//             if ( ((bitmask>>i)&1) == 0 ) {
//                 running.push(characters[i]);
//                 bitmask |= (1>>1);
//                 permutations();
//                 running.pop();
//             }
//         }
//     }
// }

// var input = document.getElementById('stdin').value;
// characters = input.split('');
// running = [];
// bitmask = 0;
// permutations();
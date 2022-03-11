// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
const DAYNAMES = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
let currentDay = prompt("Enter day name:").toLowerCase()
for (let i = 0; i < DAYNAMES.length; i++) {
    if (currentDay === DAYNAMES[i] && i + 1 < DAYNAMES.length) {
        console.log(`The next day is ${DAYNAMES[i + 1]}`)
        i = DAYNAMES.length;
    }
    else if (currentDay === DAYNAMES[i] && i + 1 === DAYNAMES.length) {
        console.log("The next day is monday")
        i = DAYNAMES.length;
    }
    else if (currentDay !== DAYNAMES[i] && i + 1 === DAYNAMES.length) {
        console.log("That is not a valid day name")
    }
}


// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
let num1 = prompt("Enter first number:")
let num2 = prompt("Enter second number:")
if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`)
}
else if (num2 < num1) {
    console.log(`${num2} is less than ${num1}`)
}
else {
    console.log(`Both numbers are equal`)
}


// Final values
// Take a look at the following program.
let nb1 = Number(prompt("Enter nb1:")); 
let nb2 = Number(prompt("Enter nb2:")); 
let nb3 = Number(prompt("Enter nb3:")); 
if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
// Initial values	    nb1 final value	    nb2 final value	    nb3 final value
// nb1=nb2=nb3=4			0                   4                   3        
// nb1=4,nb2=3,nb3=2	4                   3  	                4
// nb1=2,nb2=4,nb3=0  12                  2                   0


// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
let monthNumber = Number(prompt("Enter month number:"))
const NUM_DAYS_31 = [1, 3, 5, 7, 8, 10, 12]
const NUM_DAYS_30 = [4, 6, 9, 11]
const NUM_DAYS_28 = [2]
if (NUM_DAYS_31.includes(monthNumber)) {
  console.log("The number of days is 31")
} else if (NUM_DAYS_30.includes(monthNumber)) {
  console.log("The number of days is 30")
} else if (NUM_DAYS_28.includes(monthNumber)) {
  console.log("The number of days is 28")
} else {
  console.log("This is not a valid month number")
}


// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). 
// The program calculates and shows the time one second after. Incorrect inputs must be taken into account.
let time = prompt("Enter time in the format of ##h##m##s")
let timeHour = Number(time.split("h")[0])
let timeMinute = Number(time.split("m")[0].split("h")[1])
let timeSecond = Number(time.split("m")[1].split("s")[0])
if (timeSecond === 59 && timeMinute === 59 && timeHour === 23) {
  console.log(`0h0m0s`)
} else if (timeSecond === 59 && timeMinute === 59) {
  console.log(`${timeHour + 1}h0m0s`)
} else if (timeSecond === 59) {
  console.log(`${timeHour}h${timeMinute + 1}m0s`)
} else {
  console.log(`${timeHour}h${timeMinute}m${timeSecond + 1}s`)
}
      /**************************************  CONVERSIONS  *********************************************/
 
let age = "Malik"
// console.log(typeof (age));
// console.log(typeof age);

// let valueInNumber = Number(age);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "27" => 27
//  "27abc" => NaN
// true => 1, false => 0

let isLoggedIn = "malik"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "malik" => true

let someNumber = 30

let stringNumber = String(someNumber)
// console.log(typeof stringNumber);


/********************************************  OPERATIONS **********************************************/

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%3);

let str1 = "malik"
let str2 = " saqlain"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log(1 + 2 + "3" + true);
console.log(1 + "2"+ 2);


// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2


// console.log (+true);
console.log (+"");


let gameCounter = 100
++gameCounter;
console.log(gameCounter);

let x = 4
const y = x++
console.log(x);
console.log(y);

/*  Prefix and Post fix MDN documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment  */



/*  Conversion Documentation:
https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion  */
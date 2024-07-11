/*  # Primitive: (they are call by value) */

// 7 types : String, Number, Boolean, null, undefined, Symbol (it is used to make any value unique), BigInt (it is use to handle large values)

// NOTE: JavaScript is a dynamically typed language, variable types are determined at runtime rather than at compile time. This means that we don't need to declare the type of a variable explicitly when we define it and we can assign values of different types to the same variable throughout our code.



const score = 100
const scoreValue = 100.3 

const isLogedIn = false
const outsideTemp = null
let userEmail; // (it will give the same result as let userEmail = undefined;)

const id = Symbol('123')
const anotherId = Symbol('123')
 
console.log(id === anotherId);

// const bigNumber = 1234555667678912345n


/*  # Reference: (non-primitive)  */

//  Array, Objects, Functions.

const heros = ["ironman", "thor", "loki"];

let myObj = {
    name: "malik",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

//data type summary: // https://262.ecma-international.org/5.1/#sec-11.4.3




//+****************************************** MEMORY TYPES *********************************************************

//  Stack memory (Primitive), Heap memory (Non-Primitive)  

// Stack memory

 let myYoutubeName = "malikSaqlaindotcom"

 let anotherName = myYoutubeName
 anotherName = "selfThoughtCoder"

 console.log(myYoutubeName);
 console.log(anotherName);



//  Heap memory

let userOne = {
    email: "user1@google.com"

}

let userTwo = userOne

userTwo.email = "user2@google.com"

console.log(userOne.email);
console.log(userTwo.email);


// Another summary Video: https://youtu.be/sRpW6SFlZrQ?si=LmnngcQ-6dYZDw1r



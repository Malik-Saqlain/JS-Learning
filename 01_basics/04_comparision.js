// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.That is why null >= 0 is true and null > 0 is false.

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);

//  NOTE: avoid these type of comparision as they are confusing.



// === STRICT CHECK:  In JavaScript, a strict comparison (using `===` or `!==`) checks both the value and the type of the variables being compared. This means that the two variables must not only have the same value but also be of the same data type.

// `===` (Strict Equality): Returns `true` if both the value and type are the same. For example, `5 === '5'` returns `false` because `5` is a number and `'5'` is a string.
// `!==` (Strict Inequality): Returns `true` if the values are not equal or the types are different. For example, `5 !== '5'` returns `true`. below is an example of strict check:


console.log("2" === 2);
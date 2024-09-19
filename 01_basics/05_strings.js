const name = "malik"
const repoCount = 15

console.log(name + repoCount + " value"); // this is an outdated systex.

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // this is modern systex, it is called string interpulation.


const gameName = new String("hiteshhc")

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('p'));
// console.log(gameName.trimStart());


const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-6, 5)
console.log(anotherString);

let againString = gameName.slice(-7, 7)
console.log(againString);


// const freshString = "     malik      "
// console.log(freshString);
// console.log(freshString.trim());
// console.log(freshString.trimStart());


const url = "http://malik.com/malik%30saqlain"
console.log(url.replace('%30', '_'))

const newUrl = "http://codic.com/codic%20AI"
console.log(newUrl.replace('%20', '/'));

console.log(newUrl.includes('malik'));
console.log(url.includes('saqlain'));


const ohString = "Malik-Muhammad_Saqlain"
console.log(ohString.split('_'));


const hString = "banana"
const wString = "apple"
// console.log(hString.concat(wString));


// console.log(hString.endsWith('ll'));

// console.log(hString.lastIndexOf('o'));

console.log(hString.localeCompare('aString'));


// const matchString = "name: malik, age: 27, name: iqbal, age: 63"
// console.log(matchString.match(/name: (\w+), age: (\d+)/g));

// const matchString2 = "name: saqlain, age: 27, city: lahore, name: iqbal, age: 63, city: jhang"
// console.log(matchString2.match(/name: \w+, age: \d+, city: \w+/g));


// const matchAllString = "test1 test2"
// console.log(matchAllString.matchAll(/\d+/g)); // this way it will return an iterator, we need to add it to an array


const padEndString = "hello"
console.log(padEndString.padEnd('10', '_'));

const padStartString ="hello"
console.log(padStartString.padStart('10', '_'));

const repeatString = "hello"
console.log(repeatString.repeat('3'));

const replaceString = "javascript"
console.log(replaceString.replace('sc', 't'));

























// Here’s a simplified explanation of each string method in JavaScript, along with examples:

// 1. **`charAt()`**: Returns the character at a specific position in a string.
//    - Example: `"hello".charAt(1)` → `"e"`

// 2. **`charCodeAt()`**: Returns the Unicode number of the character at a specific position.
//    - Example: `"A".charCodeAt(0)` → `65`

// 3. **`codePointAt()`**: Returns the Unicode code point (a number) of the character at a specific position.
//    - Example: `"𝄞".codePointAt(0)` → `119070`

// 4. **`concat()`**: Combines two or more strings into one new string.
//    - Example: `"Hello".concat(" World")` → `"Hello World"`

// 5. **`endsWith()`**: Checks if a string ends with a specific substring.
//    - Example: `"hello".endsWith("lo")` → `true`

// 6. **`includes()`**: Checks if a string contains a specific substring.
//    - Example: `"hello world".includes("world")` → `true`

// 7. **`indexOf()`**: Finds the position of the first occurrence of a specific substring; returns -1 if not found.
//    - Example: `"hello".indexOf("l")` → `2`

// 8. **`lastIndexOf()`**: Finds the position of the last occurrence of a specific substring.
//    - Example: `"hello".lastIndexOf("l")` → `3`

// 9. **`localeCompare()`**: Compares two strings and returns a number indicating their order (for sorting purposes).
//    - Example: `"apple".localeCompare("banana")` → `-1` (because "apple" comes before "banana")

// 10. **`match()`**: Finds all matches of a regular expression in a string.
//     - Example: `"abc123".match(/\d+/)` → `["123"]`

// 11. **`matchAll()`**: Returns all matches of a regular expression in a string as an iterator.
//     - Example: `for (let match of "test1 test2".matchAll(/\d+/g)) { console.log(match); }` → Outputs `["1"]`, `["2"]`

// 12. **`normalize()`**: Normalizes a string according to Unicode standards.
//     - Example: `"é".normalize("NFC")` → `"é"`

// 13. **`padEnd()`**: Adds characters to the end of a string until it reaches a specified length.
//     - Example: `"hello".padEnd(10, "_")` → `"hello_____"`

// 14. **`padStart()`**: Adds characters to the start of a string until it reaches a specified length.
//     - Example: `"5".padStart(3, "0")` → `"005"`

// 15. **`repeat()`**: Repeats the string a specified number of times.
//     - Example: `"hi".repeat(3)` → `"hihihi"`

// 16. **`replace()`**: Replaces the first occurrence of a specified value in a string.
//     - Example: `"apple".replace("p", "b")` → `"abble"`

// 17. **`replaceAll()`**: Replaces all occurrences of a specified value in a string.
//     - Example: `"apple".replaceAll("p", "b")` → `"abble"`

// 18. **`search()`**: Searches a string for a match against a regular expression and returns the position of the match.
//     - Example: `"hello".search("l")` → `2`

// 19. **`slice()`**: Extracts part of a string and returns it as a new string.
//     - Example: `"hello".slice(1, 3)` → `"el"`

// 20. **`split()`**: Splits a string into an array of substrings based on a separator.
//     - Example: `"a,b,c".split(",")` → `["a", "b", "c"]`

// 21. **`startsWith()`**: Checks if a string starts with a specific substring.
//     - Example: `"hello".startsWith("he")` → `true`

// 22. **`substring()`**: Extracts characters from a string between two specified indices.
//     - Example: `"hello".substring(1, 3)` → `"el"`

// 23. **`toLocaleLowerCase()`**: Converts a string to lowercase according to the current locale.
//     - Example: `"HELLO".toLocaleLowerCase()` → `"hello"`

// 24. **`toLocaleUpperCase()`**: Converts a string to uppercase according to the current locale.
//     - Example: `"hello".toLocaleUpperCase()` → `"HELLO"`

// 25. **`toLowerCase()`**: Converts a string to lowercase.
//     - Example: `"HELLO".toLowerCase()` → `"hello"`

// 26. **`toUpperCase()`**: Converts a string to uppercase.
//     - Example: `"hello".toUpperCase()` → `"HELLO"`

// 27. **`trim()`**: Removes whitespace from both ends of a string.
//     - Example: `"  hello  ".trim()` → `"hello"`

// 28. **`trimEnd()`**: Removes whitespace from the end of a string.
//     - Example: `"  hello  ".trimEnd()` → `"  hello"`

// 29. **`trimStart()`**: Removes whitespace from the start of a string.
//     - Example: `"  hello  ".trimStart()` → `"hello  "`

// 30. **`valueOf()`**: Returns the primitive value of a string (often used internally).
//     - Example: `"hello".valueOf()` → `"hello"`

// These methods allow you to manipulate and work with strings effectively in JavaScript.

















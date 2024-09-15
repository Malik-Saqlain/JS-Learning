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








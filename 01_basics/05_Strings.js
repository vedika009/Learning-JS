const name = "vedika"
const repo = 50

// console.log(name + repo + " value");

// console.log(`hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String('vedika')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('v'));

const newStr = gameName.substring(0, 3) // starts from zero if -ve is given
// console.log(newStr);

const newStr2 = gameName.slice(-8, 3)
// console.log(newStr2);

const s = "   vedika   "
console.log(s);
console.log(s.trim());

const url = "https://vedika.com/vedika%20Mishra"
console.log(url.replace('%20', '-'))
console.log(url);

console.log(url.includes('vedika'))

//convert to array
const s1 = "https:-//vedika.-com/vedika-%20Mishra"
console.log(s1.split('-'))
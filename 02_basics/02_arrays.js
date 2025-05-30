const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman","batman", "wonderwoman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); // ek puri array push krdega
// console.log(marvel_heroes[3][1])

// const allHeroes = marvel_heroes.concat(dc_heroes)  // new array, adds each element separately
// console.log(allHeroes);

// spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes] //ek ek element add ho jaayega
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("vedika"));
console.log(Array.from("vedika")); // to character array
console.log(Array.from({name: "vedika"})) // can't make array directly from object, so empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

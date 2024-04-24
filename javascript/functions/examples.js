// Remove Falsy value from Array
const removeFalsyValues = (arr) => arr.filter(Boolean);

// Merge and Remove the Duplications
const merge = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

//  Merge two Arrays 
const mergeTwoArrays = (arr1, arr2) => [...arr1, ...arr2];

// Get the Last Element from an Array
const lastElement = (arr) => arr[arr.length - 1];

// Find Unique Values in an Array
const findUniqueValues = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

// Clone / Copy an Array
const clone = (arr) => [...arr];

/*
const aa = [1, 2, 3, 4, 5, 6];
const bb = aa;
bb[0] = 3;
console.log('aa', aa); // aa [ <<3>>, 2, 3, 4, 5, 6 ]
console.log('bb', bb); // bb [ 3, 2, 3, 4, 5, 6 ]

// use clone
const aa = [1, 2, 3, 4, 5, 6];
const bb = [...aa];
bb[0] = 3;
console.log('aa', aa); // aa [ <<1>>, 2, 3, 4, 5, 6 ] 
console.log('bb', bb); // bb [ 3, 2, 3, 4, 5, 6 ]
*/

// Convert a String to a Number
const toNumber = (str) => Number(str);
// or
const toNumber = (str) => +str;

// Convert a String to a Character Array
// or
const toCharArray = (str) => [...str];

/*
Deep Copy with JSON
You may have heard of using object spread or Object.assign() to make shallow copies of an object, but did you know about using JSON to make deep copies?

Simply convert an object to JSON using JSON.stringify() and then re-parse it using JSON.parse() to create a deep copy.

Just remember to only do this for simple objects, as doing it on large objects may raise performance issues.
*/
const person = {
  name: 'Dom',
  age: 28,
  skills: [
    'Programming',
    'Cooking',
    'Tennis',
  ],
};
const copied = JSON.parse(JSON.stringify(person));
console.log(person.skills === copied.skills); // false
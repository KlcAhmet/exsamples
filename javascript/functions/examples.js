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

// Clone an Array
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
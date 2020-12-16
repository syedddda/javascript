const numbers = [1,2,3,4,5,6];

// Array.slice(
//     startIndex,
//     endIndex
// );

// Includes start index but excludes end index
// If no end index is given, returns the remaining items taking the first param as count and deleting that many items


numbers.slice(1,3); 
// [2,3]

console.log( '1 : ', numbers ); 
// [1,2,3,4,5,6]

// Exercises

let names = [ 'John', 'Henry', "Shawn", 'Mark', 'Antony' ];

// Get Shawn and Mark from names

console.log( '2 : ', names.slice( 2,4 ) );

// Remove Shawn, Mark and Antony from names

names = names.slice( 0,2 );

console.log( '3 : ', names );

const newNames = [ 'John', 'Henry', "Shawn", 'Mark', 'Antony' ];

// Get Shawn, Mark and Antony from newNames

console.log( '4 : ', newNames.slice( 2 ) );




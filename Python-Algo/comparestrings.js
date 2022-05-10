// const strA1 = "ABC";
// const strB1 = "abc";
// const expected1 = true;

// const strA2 = "ABC";
// const strB2 = "abd";
// const expected2 = false;

// const strA3 = "ABC";
// const strB3 = "bc";
// const expected3 = false;

// /**
//  * Determines whether or not the strings are equal, ignoring case.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} strA
//  * @param {string} strB
//  * @returns {boolean} If the strings are equal or not.
//  */
// function caseInsensitiveStringCompare(strA, strB) { 
//   return strA.toUpperCase() === strB.toUpperCase();
// }

// console.log(caseInsensitiveStringCompare(strA1, strB1));


// // =============
// // Acronym
// // =============

// /* 
// Acronyms
// Create a function that, given a string, returns the string’s acronym 
// (first letter of each word capitalized). 
// Do it with .split first if you need to, then try to do it without
// */

// // const str1 = "object oriented programming";
// // const expected1 = "OOP";

// // // The 4 pillars of OOP
// // const str2 = "abstraction polymorphism inheritance encapsulation";
// // const expected2 = "APIE";

// // const str3 = "software development life cycle";
// // const expected3 = "SDLC";

// // // Bonus: ignore extra spaces
// // const str4 = "  global   information tracker    ";
// // const expected4 = "GIT";

// /**
//  * Turns the given str into an acronym.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str A string to be turned into an acronym.
//  * @returns {string} The acronym.
//  */
// function acronymize(str) { }

// // ===============
// // Reverse String
// // ===============

// /* 
//   String: Reverse
//   Given a string,
//   return a new string that is the given string reversed
// */

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) { 
  return str.split("").reverse().join("");
}

// console.log(reverseString(str1));
// console.log(reverseString(str2));
// console.log(reverseString(str3));
console.log(reverseString(str4));
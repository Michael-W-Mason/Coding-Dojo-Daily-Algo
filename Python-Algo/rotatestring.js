// // rotateString(str, amount)
// // returns a copy of the given string (str) rotated to the right a number
// // (amount) of characters - i.e. the string is shifted to the right that
// // number of characters, and anything that would go past the end of the string
// // returns to the front
// //
// // rotateString("Good morning!", 3) -> "ng!Good morni"
// // rotateString("Good morning!", 4) -> "ing!Good morn"
// // rotateString("Good morning!", 5) -> "ning!Good mor"
// //
// // the output string length should be exactly the same as the input string length
// //
// // remember that strings are immutable - you're going to have to create a
// // new string
// //
// // bonus objectives if u wanna: can the amount be more than the string length?
// // what if amount is negative? can you rotate it to the left?
// function rotateString(str, amount) {
//     if(amount == str.length){
//         return str;
//     }
//     let result1 = "";
//     let result2 = "";
//     for(let i = 0; i < amount; i++){
//         result1 += str[str.length-amount + i];
//     }
//     for(let j = 0; j < str.length - amount; j++){
//         result2 += str[j];
//     }
//     return result1 + result2;
// }

// console.log(rotateString("Let's talk about relational databases!", 7))
// // should return "abases!Let's talk about relational dat"
// console.log(rotateString("abcde", 5))
// // should return "abcde"

// // isRotation(stringA, stringB)
// // returns true if a rotation of stringA could form stringB or vice versa
// // (if one is true, the other is true)
// // return false otherwise
// //
// // isRotation("Good morning!", "ng!Good morni") -> true
// // isRotation("Good morning!", "ng! Good morni") -> false
// // (the strings are of different lengths, it's not possible)
// // isRotation("Good morning!", "ng!Good monri") -> false
// //
// // suggestion - this is brute forceable, but once you get that working
// // see if there's a more elegant solution for a more civilized age

// function isRotation(stringA, stringB) {
//     if(stringA.length != stringB.length){
//         return false;
//     }
//     if(stringA == stringB){
//         return true;
//     }
//     for(let i = 0; i < stringA.length; i++){
//         let currentChar = str[i];
//         if(currentChar != stringB[i]){
//             continue;
//         }
//         else{
//             let anchor = i;
//             let newString = anchor[i];
//             let runner = i + 1;
//             let stringAindex = 0;
//             let origString = stringA[stringAindex];
//             while(newString == origString){
                
//             }
//         }
//     }
// }

// console.log(isRotation("Let's talk about relational databases!", "abases!Let's talk about relational dat"))

// // come up with your own test cases for this one!
// // they won't always be given to you in the real world

let stringA = "Let's talk about relational databases!";
let stringB = "abases!Let's talk about relational dat";
let sum1 = 0;
let sum2 = 0;
for(let i = 0; i < stringA.length; i++){
    sum1 += stringA.charCodeAt(i);
    sum2 += stringB.charCodeAt(i);
}
console.log(sum1, sum2);
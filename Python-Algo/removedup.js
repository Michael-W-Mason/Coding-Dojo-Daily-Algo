/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

/**
 * De-dupes the given string.

 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */


function stringDedupe(str) {
    let result = ""; //Return string
    let myObj = {}; //Empty object that holds our unique values
    for (let i of str){ //loop over all characters of string
        if (i in myObj){ //if we already have this value keep looping
            continue;
        }
        else{
            myObj[i] = 0; //create a unique key with character
            result += i; //concat our result with unique key
        }
    }
    return result;
}
// console.log(stringDedupe(str1));
// console.log(stringDedupe(str2));
// console.log(stringDedupe(str3));
// console.log(stringDedupe(str4));


/****************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str5 = "hello";
const expected5 = "olleh";

const str6 = "hello world";
const expected6 = "olleh dlrow";

const str7 = "abc def ghi";
const expected7 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.

 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    let myArr = str.split(" ") //Split string into array of words
    for (let i in myArr){
        myArr[i] = myArr[i].split("").reverse().join(""); //Take each individual word, make it an array, reverse it, and make it a string again
    }
    return myArr.join(" ");
}
// console.log(reverseWords(str5));
// console.log(reverseWords(str6));
// console.log(reverseWords(str7));


/********************************/
/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str8 = "This is a test";
const expected8 = "test a is This";

const str9 = "hello";
const expected9 = "hello";

const str10 = "This  is a   test";
const expected10 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.

 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
    let myArr = wordsStr.trim().split(" "); //Split and trim our string to remove spaces at end / beginning and create an array
    for (let i = 0; i < myArr.length; i++){ //iterate over every word
        if(myArr[i] == ""){ //if our word in our array is a blank
            myArr.splice(i, 1); //delete the element and iterate back by one
            i--;
        }
        else{
            myArr[i] = myArr[i].trim(); //otherwise we trim each word
        }
    }
    return myArr.reverse().join(" "); // return the sentenced reversed in order
}
// console.log(reverseWordOrder(str8));
// console.log(reverseWordOrder(str9));
console.log(reverseWordOrder(str10));

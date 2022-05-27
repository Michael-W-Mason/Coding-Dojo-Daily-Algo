/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case
.indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllaslkhdgasjhkdheosdasuytdauistyd";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz"
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(needle, haystack) { 
    if(haystack.length < needle.length){
        return false;
    }
    let hayStackHash = {};
    for(let i of haystack){
        i = i.toLowerCase();
        if(hayStackHash[i] !== undefined){
            hayStackHash[i] += 1;
        }
        else {
            hayStackHash[i] = 1;
        }
    }
    for(let i of needle){
        i=i.toLowerCase();
        if(hayStackHash[i] === undefined || hayStackHash[i] === 0){
            return false;
        }
        else{
            hayStackHash[i] -= 1;
        }
    }
    return true;
}


console.log(canBuildS1FromS2(strA1, strB1));
console.log(canBuildS1FromS2(strA2, strB2));
console.log(canBuildS1FromS2(strA3, strB3));
console.log(canBuildS1FromS2(strA4, strB4));
console.log(canBuildS1FromS2(strA5, strB5));
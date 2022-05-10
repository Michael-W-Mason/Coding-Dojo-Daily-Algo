/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

/**
 * @typedef {Object} Inventory
 * @property {string} Inventory.name The name of the item.
 * @property {number} Inventory.quantity The quantity of the item.
 */

/**
 * Updates the current inventory based on the new inventory.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Inventory>} newInv A shipment of new inventory.
 *    An array of inventory objects.
 * @param {Array<Inventory>} currInv
 * @return The currInv after being updated.
 */
function updateInventory(newInv, currInv) {
    //If our new inventory is empty return current inventory
    if(newInv == []){
        return currInv;
    }
    //Iterate through all new items
    for(let newItem of newInv){
        //Boolean to check if our current new item is in our array
        let isIn = true;
        //Iterate over all current items
        for(let currentItem of currInv){
            // If our current new item is already in our list, then just increment the quantity
            if(currentItem.name == newItem.name){
                isIn = false;
                currentItem.quantity += newItem.quantity;
            }
        }
        // Our item wasn't in our current inventory so we need to add it
        if(isIn){
            currInv.push(newItem);
        }
    }
    return currInv;
}

console.log(updateInventory(newInv1, currInv1));
console.log(updateInventory(newInv2, currInv2));
console.log(updateInventory(newInv3, currInv3));

/*****************************************************************************/

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str4 = "   hello world     ";
const expected4 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
    let result = "";
    let start = 0;
    let end = str.length - 1;

    //Iterate from start of index until we find a character that isnt a space, and retain that index
    for(start; start < str.length; start++){
        if(str[start] != " "){
            break;
        }
    }

    //Decrement from end of index until we find a character that isnt a space and retain that index
    for(end; end > 0; end--){
        if(str[end] != " "){
            break;
        }
    }

    //Iterate from where we know the characters of the string start and end and concatinate our result
    for(let i = start; i <= end; i++){
        result += str[i];
    }
    return result;
}

console.log(trim(str4));

/*****************************************************************************/

/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA5 = "yes";
const strB5 = "eys";
const expected5 = true;

const strA6 = "yes";
const strB6 = "eYs";
const expected6 = true;

const strA7 = "no";
const strB7 = "noo";
const expected7 = false;

const strA8 = "silent";
const strB8 = "listen";
const expected8 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */

// function isAnagram(s1, s2) {
//     //If we know the length of the strings are different they can't be anagrams
//     if(s1.length != s2.length){
//         return false;
//     }
//     //Set strings to lowercase so we know they will both be in the same format
//     s1 = s1.toLowerCase();
//     s2 = s2.toLowerCase();
//     let sum1 = 0;
//     let sum2 = 0;

//     //iterate through one string and add the value of that character to the the sum of each string
//     for(let i in s1.length){
//         sum1 += s1.charCodeAt[i];
//         sum2 += s2.charCodeAt[i];
//     }
//     //If sums are equal then they consist of the same characters, otherwise they aren't anagrams
//     return sum1 == sum2;
// }

function isAnagram(s1, s2) {
    //If we know the length of the strings are different they can't be anagramss
    if(s1.length != s2.length){
        return false;
    }
    //Set strings to lowercase so we know they will both be in the same format
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    //iterate through one of the strings and see if all the characters are included in the other string
    for(let i in s2){
        let index = s1.indexOf(s2[i])
        if (index == -1){
            return false;
        }
        else{
            
        }
    }
    return true;
}

console.log(isAnagram(strA5, strB5));
console.log(isAnagram(strA6, strB6));
console.log(isAnagram(strA7, strB7));
console.log(isAnagram(strA8, strB8));


/*****************************************************************************/
const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */

//PseudoCode:
// Create a return object, initialize to empty {}
// Loop through array
//      Check if our element we are looking at exisits in our object already
//              If so, incremenet the value by one
//      Else, create a new key for our object
//              Set its value to 1
// Return object

function makeFrequencyTable(arr) {
    let result = {}; //Create empty object to return as frequency table
    for(let key of arr){ // iterate through all elements of array
        if(key in result){ // if our frequency table already has our element in it then increment the value by one
            result[key]++;
        }
        else{ //if it is a new element we havent seen yet then initialize its value to one and add it to our frequency table.
            result[key] = 1;
        }
    }
    return result;
}

console.log(makeFrequencyTable(arr1));
console.log(makeFrequencyTable(arr2));
console.log(makeFrequencyTable(arr3));


/*****************************************************************************/


/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums4 = [1];
const expected4 = 1;

const nums5 = [5, 4, 5];
const expected5 = 4;

const nums6 = [5, 4, 3, 4, 3, 4, 5];
const expected6 = 4; // there is a pair of 4s but one 4 has no pair.

const nums7 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected7 = 1;

function oddOccurrencesInArray(nums) {
    let myObj = makeFrequencyTable(nums); // Generate a freq table with our array
    for(key in myObj){ // iterate through all the keys of the freq table
        if (myObj[key] % 2 != 0){ // if the value in our freq table is odd, then we found our number without a pair
            return key;
        }
    }
}

console.log(oddOccurrencesInArray(nums4), "should equal", expected4);
console.log(oddOccurrencesInArray(nums5), "should equal", expected5);
console.log(oddOccurrencesInArray(nums6), "should equal", expected6);
console.log(oddOccurrencesInArray(nums7), "should equal", expected7);
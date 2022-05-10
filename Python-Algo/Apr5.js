/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

// const arr1 = [1, 2, 3];
// const separator1 = ", ";
// const expected1 = "1, 2, 3";

// const arr2 = [1, 2, 3];
// const separator2 = "-";
// const expected2 = "1-2-3";

// const arr3 = [1, 2, 3];
// const separator3 = " - ";
// const expected3 = "1 - 2 - 3";

// const arr4 = [1];
// const separator4 = ", ";
// const expected4 = "1";

// const arr5 = [];
// const separator5 = ", ";
// const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */

function join(arr, separator) {
    return arr.join(separator)
}

function join(arr, separator) {
    let result = "";
    for(let i in arr){
        result += arr[i]
        if(i != arr.length-1){
            result += separator
        }
    }
    return result;
}

// console.log(join(arr5, separator5))



// ==============
// Book Index
// ==============
/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [5, 6, 7, 8, 9];
const expected2 = "5-9";

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected3 = "1-3, 7, 9, 15-17";

function bookIndex(nums) {
    let result = []; // Contains all of our values as an array and is returned as a string with .join
    for (let i = 0; i < nums.length; i++) {
        //Checks if neighbors value is one higher
        if ((nums[i] + 1) == (nums[i + 1])) {
            let tempIndex = i; // We need to store the starting index because we need to increase it when we check for a range
            let endIndex = tempIndex++; // Our current end index is just our neighbor
            //While the next neighbor is one more than current position keep iterating until the neighbor is not greater than one
            while (nums[tempIndex] == (nums[endIndex] + 1)) {
                endIndex++;
                tempIndex++;
            }
            let range = [nums[i], nums[endIndex]]; //The range is equal to our starting index to our ending index
            result.push(range.join("-")); //Pushes our range as a string to the result array          
            i = endIndex; // We set the iterator equal to the end index b/c we do not need to look at the range we iterated over
        }
        //If our neighbor is not one greater then we just push to the result
        else {
            result.push(nums[i].toString());
        }
    }

    //Our result array is returned as a string that is seperated by commas between values and ranges
    return result.join(", ");
}

console.log(bookIndex(nums1));
console.log(bookIndex(nums2));
console.log(bookIndex(nums3));
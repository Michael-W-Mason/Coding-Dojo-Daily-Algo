/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

const nums4 = [1,2,3,4,5,6,7];
const searchNum4 = 3;
const expected4 = 2;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 */
function binarySearch(sortedNums, searchNum) {
    let start = 0;
    let end = sortedNums.length - 1;
    let mid = Math.floor((start + end) / 2);
    if(sortedNums[mid] == searchNum){
        return true;
    }
    if(sortedNums.length == 0){
        return false;
    }
    if(sortedNums[mid] > searchNum){
        let newArr = [];
        for(let i = 0; i < mid; i++){
            newArr.push(sortedNums[i])
        }
        return binarySearch(newArr, searchNum);
    }
    else{
        let newArr = [];
        for(let i = mid + 1; i <= end; i++){
            newArr.push(sortedNums[i])
        }
        return binarySearch(newArr, searchNum, sortedNums.length);
    }
}

// console.log(binarySearch(nums1, searchNum1));
// console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));
// console.log(binarySearch(nums4, searchNum4));

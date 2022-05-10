/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

const nums5 = [3, 5, 4, 3, 4, 6, 5];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
// function dedupeSorted(nums) {
//     let lastUniqueValue = undefined;
//     let results = [];
//     for(let i in nums){
//         if(i == 0){
//             results.push(nums[i])
//             lastUniqueValue = nums[i];
//         }
//         else if(nums[i] == lastUniqueValue){
//             continue;
//         }
//         else{
//             results.push(nums[i])
//             lastUniqueValue = nums[i];
//         }
//     }
//     return results;
// }

// function dedupeSorted(nums) {
//     let lastUniqueValue = undefined;
//     let startIndex = 0;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] !== lastUniqueValue){
//             lastUniqueValue = nums[i];
//             nums[startIndex] = nums[i];
//             startIndex++;
//         }
//         else{
//             nums.splice(i,1)
//             i--;
//         }
//     }
//     return nums;
// }

function dedupeSorted(nums) {
    let hashMap = {};
    let startIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(hashMap[nums[i]] == undefined){
            hashMap[nums[i]] = nums[i];
            // nums[startIndex] = nums[i];
            // startIndex++;
        }
        else{
            nums.splice(i,1);
            i--;
        }
    }
    return nums;
}

console.log(dedupeSorted(nums1));
console.log(dedupeSorted(nums2));
console.log(dedupeSorted(nums3));
console.log(dedupeSorted(nums4));
console.log(dedupeSorted(nums5));


/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/


// const expected1 = 6;

const nums6 = [3, 5, 5];
// const expected2 = 3;

const nums7 = [3, 3, 5];
// const expected3 = 5;

const nums8 = [5];
// const expected4 = 5;

const nums9 = [];
// const expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
// function firstNonRepeated(nums) {
//     for(let i = 0; i < nums.length; i++){
//         let isDuplicate = false;
//         for(let j = 0; j < nums.length; j++){
//             if(i == j){
//                 continue;
//             }
//             else if(nums[i] == nums[j]){
//                 isDuplicate = true;
//             }
//         }
//         if(isDuplicate == false){
//             return nums[i];
//         }
//     }
//     return null; 
// }

function firstNonRepeated(nums) {
    let hashMap = {};
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in hashMap){
            hashMap[nums[i]] += 1;
        }
        else{
            hashMap[nums[i]] = 1;
        }
    }
    for(i in hashMap){
        if(hashMap[i] == 1){
            return i;
        }
    }
    return null;
}

// console.log(firstNonRepeated(nums5));
// console.log(firstNonRepeated(nums6));
// console.log(firstNonRepeated(nums7));
// console.log(firstNonRepeated(nums8));
// console.log(firstNonRepeated(nums9));
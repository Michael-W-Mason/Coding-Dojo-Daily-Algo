/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */


let iterations = 0;

function merge(arr1, arr2) {
    console.log('left arr is...', arr1, 'right arr is...', arr2);
    let result = [];
    let length = arr1.length + arr2.length;
    for(let i = 0; i < length; i++){
        if(arr1[0] <= arr2[0]){
            result.push(arr1[0]);
            arr1.shift();
        }
        else if(arr2[0] < arr1[0]){
            result.push(arr2[0]);
            arr2.shift();
        }
        else{
            if(arr1[0] == undefined){
                result.push(...arr2);
                break;
            }
            else{
                result.push(...arr1);
                break;
            }
        }
    }
    console.log(`merged arrays is...`, result);
    return result;
}

// console.log(merge(sortedA4, sortedB4));
// console.log(merge(sortedA3, sortedB3));
// console.log(merge(sortedA2, sortedB2));
// console.log(merge(sortedA1, sortedB1));

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
    console.log(`original array is...`, nums);
    if(nums.length == 1){
        return nums;
    }
    let middle = Math.floor(nums.length / 2);
    let leftArr = nums.slice(0, middle);
    let rightArr = nums.slice(middle, nums.length);
    return(merge(mergeSort(leftArr), (mergeSort(rightArr))));
}
console.log(mergeSort(numsRandomOrder));
console.log(mergeSort)

// console.log(mergeSort(numsReversed));
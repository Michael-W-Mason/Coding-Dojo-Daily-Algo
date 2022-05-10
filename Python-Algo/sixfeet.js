/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    let count = 0;
    let foundFirst = false;
    for(let i of queue){
        if(i == 0 && foundFirst == false){
            continue;
        }
        else if(i == 1 && foundFirst == false){
            foundFirst = true;
        }
        else if (i == 0){
            count++;
        }
        else if(i == 1 && count < 6){
            return false;
        }
        else{
            count = 0;
        }
    }
    return true;
}

// console.log(socialDistancingEnforcer(queue1));
// console.log(socialDistancingEnforcer(queue2));
// console.log(socialDistancingEnforcer(queue3));
// console.log(socialDistancingEnforcer(queue4));


/*****************************************************************************/

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums5 = [-2, 5, 7, 0, 3];
const expected5 = 2;

const nums6 = [9, 9];
const expected6 = -1;


/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */

const nums7 = [1,1,1,1,1,1,1,0,7]
const expected7 = 4;

function balanceIndex(nums) {
    if(nums.length < 3){
        return -1;
    }
    let leftSum = 0;
    let rightSum = 0;
    let leftSumArr = [];
    let rightSumArr = [];

    for(let i = 0; i <= nums.length; i++){
        let j = nums.length - i - 1;
        leftSum += nums[i];
        rightSum += nums[j];
        leftSumArr.push(leftSum);
        rightSumArr.push(rightSum);
    }
    for(let i = 0; i < leftSumArr.length; i++){ 
        for(let j = 0; j < rightSumArr.length; j++){
            if(leftSumArr[i] == rightSumArr[j]){
                return i + 1;
            }
        }
    }
    return -1;
}

console.log(balanceIndex(nums5));
console.log(balanceIndex(nums6));
console.log(balanceIndex(nums7));

/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

//[2,7]

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    let iter1 = 0;
    let iter2 = 0;
    let lastVal = -1;
    let result = [];
    while(true){
        if(iter1 >= sortedA.length || iter2 >= sortedB.length){
            break;
        }
        
        if(sortedA[iter1] == lastVal){
            iter1++;
            continue;
        }
        else if(sortedB[iter2] == lastVal){
            iter2++;
            continue;
        }

        if(sortedA[iter1] < sortedB[iter2]){
            iter1++;
        }
        else if(sortedA[iter1] > sortedB[iter2]){
            iter2++;
        }
        else{
            lastVal = sortedA[iter1];
            result.push(sortedA[iter1]);
            iter1++;
            iter2++;
        }
    }
    return result;
}


console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));
console.log(orderedIntersection(numsA3, numsB3));
/*****************************************************************************/
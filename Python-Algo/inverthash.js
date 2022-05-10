const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
};

const keys2 = [];
const vals2 = [];
const expected2 = {};

/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
function zipArraysIntoMap(keys, values) {
    let result = {};
    for (let i in keys) {
        result[keys[i]] = values[i];
    }
    return result;
}

console.log(zipArraysIntoMap(keys1, vals1))
console.log(zipArraysIntoMap(keys2, vals2))


/*************************************/

/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj3 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected3 = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) { 
    let result = {};
    for(let i of Object.keys(obj)){
        result[obj[i]] = i;
    }
    return result;
}

console.log(invertObj(obj3));


// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

input1 = 3.21;

function generateCoinChange(input) {
    let result = {quarters : 0, dimes : 0, nickels : 0, pennies : 0};
    while(input > 0){
        input = parseFloat(input).toFixed(2); //Fixes float rounding error
        if(input - .25 > 0){
            input -= .25;
            result.quarters++;
        }
        else if(input - .10 > 0){
            input -= .10;
            result.dimes++;
        }
        else if(input - .05 > 0){
            input -= .05;
            result.nickels++;
        }
        else{
            input -= .01
            result.pennies++;
        }
    }
    return result;
}

console.log(generateCoinChange(input1));
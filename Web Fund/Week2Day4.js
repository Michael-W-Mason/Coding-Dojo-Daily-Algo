var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]];

// We can console.log the `8` in this array if we
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value)
// that returns true if the value is present and false otherwise

function isPresent2d(arr2d, value) {
    for (let i of arr2d) {
        if (i.includes(value)) {
            return true;
        }
    }
    return false;
}

console.log(isPresent2d(arr2d, 8));


// complete the following function
function flatten(arr2d) {
    var flat = [];
    for (let i of arr2d) {
        flat.push(...i);
    }
    return flat;
}

var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
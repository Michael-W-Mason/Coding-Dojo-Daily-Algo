function partition(arr, left, right){
    let mid = Math.floor((left + right) / 2);
    let end = right;
    let pivot = arr[mid];
    [arr[mid], arr[right]] = [arr[right], arr[mid]];
    right--;
    while(left < right){
        while(arr[left] < pivot){
            left++;
        }
        while(arr[right] > pivot){
            right--;
        }
        // console.log(arr[left], arr[right]);
        [arr[left], arr[right]] = [arr[right], arr[left]];
        right--;
        left++;
    }
    console.log(left, right);
    [arr[left], arr[end]] = [arr[end], arr[left]];
    return left;
}

function quickSort(arr, start, end){
    if(start < end){
        let index = partition(arr, start, end);
        console.log("========================");
        console.log(index);
        console.log(arr);
        // quickSort(arr, start, index);
        quickSort(arr, index + 1, end);
    }
    return arr;
}


let myArr = [2,6,5,3,8,7,1,0];
console.log(quickSort(myArr, 0, myArr.length-1));

function Reverse(arr){
    let reverseArr = []; 
    for(let i = arr.length - 1; i >=0; i--){
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}

let result = Reverse(["a", "b", "c", "d", "e"]);
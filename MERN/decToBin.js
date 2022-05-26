

let num = 230000000000000000;

function convertToBin(num){
    let quotient = num;
    let remainder = 0;
    let result = [];
    while(quotient > 1){
        quotient = Math.floor(quotient);
        remainder = quotient % 2;
        if(remainder === 1){
            result.push(1)
        }
        else{
            result.push(0)
        }
        quotient /= 2;
    }
    if(quotient == 1){
        result.push(1);
    }
    return result.reverse().join("");
}

function convertToBinary(num){
    let binaryResult = '';

    while (num > 0){
        binaryResult = (num%2) + binaryResult;
        num /= 2;
        num = Math.floor(num);
    }

    return parseInt(binaryResult);
}
console.log(convertToBinary(num));
console.log(convertToBin(num));
/*
var a = 25;
a = a - 13; //a = 12
console.log(a/2); //6, a = 12
    
a = "hello"; //a="hello"
console.log(a + " hello"); //hello hello
//outputs: 6, hello hello
*/


for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}//0, 4, 8

console.log("outside of the loop " + i); //outside... 12
//outputs: 0, 4, 8, out... 12



/*
function getTotal(arrayOfNumbers) {
    //arrayOfNumbers = [1,3,5]
    var sum = arrayOfNumbers[0]; //sum = 1

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i]; //1 + 1 + 3 + 5
        console.log("the current sum is: " + sum);
    }//the ... 2, the... 5,  the.. 10

    console.log("the total is: " + sum); //the tot .. 10

}


getTotal([1, 3, 5]); //lenght = 3

//outputs the.... 2, the ... 5, the .. 10, the total is 10
*/

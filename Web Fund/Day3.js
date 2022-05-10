// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";

// if (isSunny) {
//     whatToBring += "sunglasses, ";
// }
// if (temperature < 50) {
//     whatToBring += "a coat, ";
// }
// if (isRaining) {
//     whatToBring += "an umbrella, ";
// }
// whatToBring += "and a smile!";

// console.log(whatToBring);




// for (var i = 10; i > 0; i--) {
//     if (i != 2) {
//         console.log(i);
//     } else {
//         console.log("ignition!");
//     }
// }

// console.log("liftoff!");





var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!
for(let i in numbers){
    if(numbers[i] > 0){
        countPositives++;
    }
}



console.log("there are " + countPositives + " positive values");


// Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.

// function d6() {
//     var roll = Math.random();
//     // your code here
//     roll = Math.floor((roll * 6) + 1);
//     return roll;
// }
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);


// Using the following array, write a function that will answer all of our questions by randomly choosing a response

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

//Generates the daily Algo
let num = Math.random();
num = Math.floor((num * lifesAnswers.length));
console.log(lifesAnswers[num]);

var count = [];
count = toZero(count);
function toZero(reset) {
    for (i in lifesAnswers) {
        reset[i] = 0;
    }
    return reset;
}

let start = Date.now();
let minDiff = Number.POSITIVE_INFINITY;
let max = 0;
let min = 0;
do {
    count = toZero(count);
    for (let i = 0; i < 10000000; i++) {
        let num = Math.random();
        num = Math.floor((num * lifesAnswers.length));
        count[num]++;
    }
    max = Math.max(...count);
    min = Math.min(...count);
    if(max - min < minDiff){
        minDiff = (max-min);
        console.log(minDiff, Date.now() - start);
    }

} while ((max - min) >= 1000)
console.log(Date.now() - start);
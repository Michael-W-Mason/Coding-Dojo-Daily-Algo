// parensValid(input)
// input is a string
// return true if the input has a valid configuration of parentheses and false
// otherwise. by "return true/false" I mean the boolean value, not a string
// what's valid?
// - no more open parens than close parens or vice versa
// - no close parens that appear before a valid open paren
// - ignore all other characters that are not ( and )
// - () -> true
// - )( -> false
// - hello! -> true (???)
// - (()) -> true
// - (q(a)(x)(!(7(xx)(34)(2, 7, 11)))) -> true
// - (() -> false
// - hello!() -> true
// suggestion - don't bother trying to split the string...
// it won't do us any good and just makes things more complicated
// suggestion again - do we have to check every single character in the input?
// hypothetical input: ) followed by one billion characters
// or: a) followed by one billion characters
// or: a37()) followed by one billion characters



function parensValid(str) {
    let closeCount = 0;
    let openCount = 0;
    for(let i of str){
        if(i == "("){
            openCount++;
        }
        else if(i == ")"){
            closeCount++;
        }
        if(closeCount > openCount){
            return false;
        }
    }
    if(closeCount == openCount){
        return true;
    }
    else{
        return false;
    }
}

// console.log(parensValid('()')); //True
// console.log(parensValid('(())')); //True
// console.log(parensValid('(q(a)(x)(!(7(xx)(34)(2, 7, 11))))')); //True
// console.log(parensValid(')(')); //False
// console.log(parensValid('(()')); //False
// console.log(parensValid('hello!')); //True
// make your own test cases too!

// bracesValid(input)
// as above, but for parentheses, curly brackets (or curly braces) and square
// brackets - with the caveat that we can't have two sets of braces
// interleaved, or our function should return false, as follows:
// ([)] -> false
// the parentheses close before the square brackets do, which is Bad
// ()[]{} -> true
// (] -> false
// x(37[q{3, 7, 9}{22, 6, 91}])(32q) -> true
// ()]... -> false

function bracesValid(input){
    let stack =[];
    let brackets = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };
    for(i in input){
        //If our bracket is an opening one, then add it to our stack
        if(input[i] in brackets){
            stack.push(input[i])
        }
        //If our next character is a closing bracket in our object
        else if(Object.values(brackets).indexOf(input[i]) > -1){
            //If our closing bracket in our object matches with the corresponding bracket, remove that element from the stack
            if(input[i] == brackets[stack[stack.length-1]]){
                stack.pop();
            }
            //Otherwise our brackets dont match like "(" and "}"
            else{
                return false;
            }
        }
    }
    //If we still have values in our stack then we return false because we have an unaccounted for opening bracket
    return stack.length == 0;
}

console.log(bracesValid('x(37[q{3, 7, 9}{22, 6, 91}])(32q)[]')); // should return true 
console.log(bracesValid('([{}{}])()')); // should return true
console.log(bracesValid('([{}{]})()')); // should return false
console.log(bracesValid('this is valid!')); // should return true


// bonus: what if we also want to check angle brackets (< and >)? what if
// sometimes we care about curly braces but sometimes we don't?

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// these numbers given are parameters 

//function addTwoNumbers(number1, number2){
//   console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){
    
    //let result = number1 + number2
    //console.log("Hitesh")
    //return result
    return number1 + number2
}

const result = addTwoNumbers(3, 6) // values given while calling function is called as arguments 

//console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("Aish"))
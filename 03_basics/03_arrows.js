const user = {
    username: "aish",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this); // whenevr we are in node environment this is referred for an empty object

//function code(){
//    let username = "Aish"
//    console.log(this.username);
//}

//code()

//const code = function (){
 //   let username = "Aish"
// console.log(this.username);

//}

//code ()

const chai = () => {
    let username = "Aish"
    console.log(this);
}

//chai()

//Arrow function basic syntax

//const addTwo = (num1, num2) => {
//  return num1 + num2
//}

// if written in curly braceses return key word is needed if parantheses no return necessary

// implicit return format

// const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) =>( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Aish"})

console.log(addTwo(3, 4))



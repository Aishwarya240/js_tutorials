// Immediately Invoked Function Expressions (IIFE)

(function code(){
    // named IIFI becz theres name given to the function
    console.log(`DB CONNECTED`);
}) ();

// while wtiting 2 IIFI semi colon is necessary
//code()
// sometimes theres problem with global scope pollution so whatever the variables of global scope or any declarations pollution to be removed we use IIFE

// writing this function as arrow function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('aish')
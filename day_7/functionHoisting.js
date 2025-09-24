//function 

greet();
function greet() {
    console.log("Hey!");
}
greet();

// greetAsExpression();
const greetAsExpression = function greet() {
    console.log("Hey!");
}
greetAsExpression();


//arrow function
greetArrowFun();
const greetArrowFun = ()=>{
    console.log("Hey!");
}

//temporal dead zone
// time between initialization and invokation 
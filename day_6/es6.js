//let and const
// var rollno;
// {
//     let name = "xyx";
//     name = "abce"
//     console.log("value of name inside the block scope: ", name);
// }
// function letScope() {
//     var rollno = 234;
//     let name = "xyx";
//     const pi = 3.14; //while declaring the const variable we will assign some value as well
//     name = "abce"
//     console.log("value of name inside the function scope: ", name);
//     console.log("value of rollno inside the function scope: ", rollno);
// }
// letScope();
// console.log("value of name outside the block scope: ", name);
// console.log("value of rollno inside the function scope: ", rollno);


// fun();
// function fun() {
//     console.log("Output from function with 'function keyword'");
// }
// fun();

// fun();
// const f = function  fun() {
//     console.log("Output from function with 'function keyword'");
// }
// fun();

// arrowFun();
const arrowFun = () => {
    console.log("Output from function with 'function keyword'");
}
arrowFun();

//iife 
(function f() {
    console.log("This is the IIFE(Immediately Invoked Function Expression)");

})();


//rest parameter

const sum = (...args) => {
    let sumOfNaturalNum = 0
    args.forEach((e)=> sumOfNaturalNum += e);
    return sumOfNaturalNum;
}
const output = sum(1,2,3,4,5,6,7);
console.log(output);

//default parameter

const add = (a,b,c=0)=> a+b+c;
console.log(add(1,2));
console.log(add(1,2,5));




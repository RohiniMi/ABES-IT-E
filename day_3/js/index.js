// console.log("Hello");
alert("This is a alert message");
// console.error("This is the error message");
document.write("document message");

//variables

let a = 20;
const pi = 3.14;
// console.log(a + " ",className + " " + pi);

// console.log(className+ " before declare");
// var className = "IT-E";
// console.log(className + " after 1st declaraction");

// var className = 30;
// console.log(className + " after second declaraction");

//let
// console.log(userName);
// let userName = "XYZ";
// console.log(userName);
// userName = "abc";
// console.log(userName);

//const 
const c = 3;

//string
let firtName = "Rohini";
let lastName = "Mittal";
let message = "Hello";
let concatenatedString = message + ", " + firtName + " " + lastName + "!"
document.write(concatenatedString);

// let ans = 2.0 + "2";
// console.log(ans);
// console.log(typeof(ans));
// let answer = "2"+ 2;
// console.log(answer, typeof(answer));

const student = {
    firstName: "Rohini",
    lastName: "Mittal",
    rollNo: 24
}
// console.log(typeof(student));
//type conversion
// Implicit
// string to Number
// let a1 = "20";
// let sub = a1-10;
// console.log("typeof(a1):"+ typeof(a1)+" "+sub + " type of sub: "+ typeof(sub));

//boolean to string
// const output = true + "true";
// console.log(output + " typeof(output): " + typeof (output));

//number to boolean
// let num = 0;
// if (num) {
//     console.log("true part");
// } else {
//     console.log("false part");

// }


// explicit type conversion
// number to string
let numToStr = String(12345);
console.log(numToStr);

let strToNum = Number("true");
console.log("strToNum "+ strToNum + typeof(strToNum));







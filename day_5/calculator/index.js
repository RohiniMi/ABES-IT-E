const a = document.getElementById("num1");
const b = document.getElementById("num2");
const c = document.getElementById("num3");
const output = document.getElementById("output");
const add = (a, b, c = 0) => {
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log("add function called");
    // console.log(Number(a)+Number(b)+Number(c));
    if(a==="" || b===""){
        document.getElementById("error-num1").innerHTML = "please take some value";
        document.getElementById("error-num1").style.color = "red";
    }
    output.innerText = `${Number(a)+Number(b)+Number(c)}`;
    return a + b + c;
}
const sub = () => {
    output.innerText = a.value - b.value - c.value;
}
const mul = (a, b, c = 1) => {
    console.log("mul function called");
    return a * b * c;
}
const div = (a, b, c = 1) => {
    console.log("div function called");
    return (a / b) / c;
}
// console.log(add(2, 4, 6));
// console.log(add(6, 7));
// console.log(sub(7, 4, 1));
// console.log(sub(6, 1));
// console.log(mul(3, 2));
// console.log(div(5, 1));
// console.log(div(6, 1, 2));
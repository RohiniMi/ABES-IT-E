// const a = function b(){
//     console.log("Print from b function");  
//     return 0; 
// }
// console.log(a());
// b();
// const a = () => {
//     console.log("Print from b function");
//     // return 0;
// }
// console.log(a);
// console.log(a());

const add = (a,b,c=0)=>{ return a+b+c;}
const sub = (a,b,c=0)=> {return a-b-c;}
const mul = (a,b,c=1)=> {return a*b*c;}
const div = (a,b,c=1)=> {return (a/b)/c;}
console.log(add(2,4,6));
console.log(add(6,7));
console.log(sub(7,4,1));
console.log(sub(6,1));
console.log(mul(3,2));
console.log(div(5,1));
console.log(div(6,1,2));







console.log("before function invokation");
const waitforSomeTime = (sec)=>{
    const start = Date.now();
    while(Date.now() - start < sec){
        //do nothing
    }
}
const fun = ()=>{
    console.log("inside the function, before wait");   
    waitforSomeTime(5000);    
    console.log("inside the function");   
}
fun();
console.log("after function invokation");

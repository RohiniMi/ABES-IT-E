console.log("before function invokation");
const waitforSomeTime = (sec) => {
    setTimeout(() => {
        console.log("inside setTimeout Function");
    }, sec)
}
const asyncUsingSetTimeOut = () => {
    console.log("inside the function, before wait");
    waitforSomeTime(5000);
    console.log("inside the function");
}
asyncUsingSetTimeOut();
console.log("after function invokation");
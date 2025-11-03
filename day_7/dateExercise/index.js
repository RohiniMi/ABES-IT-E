const fun = () => {
    const dob = document.getElementById("dob");
    const output = document.getElementById("output");

    const dobDate = new Date(dob.value);
    const currentDate = new Date();
    //logic
    console.log(currentDate.getFullYear());
    console.log(dobDate.getFullYear());
    
    let age = currentDate.getFullYear() - dobDate.getFullYear();
    let ageInMonths = currentDate.getMonth() - dobDate.getMonth();

    if(dobDate.getMonth()> currentDate.getMonth()) age --;
    if(ageInMonths< 0) ageInMonths += 12;

    output.innerText = `Your age is ${age} years ${ageInMonths} months`;
}
const btn = document.getElementById("btn");
btn.addEventListener("click", fun);

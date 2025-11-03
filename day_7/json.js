//json
//javascript object notation
const obj = {
    rollno: 1,
    name: "xyz"
}
console.log(typeof obj);
//obj to json
const jsonObj  = JSON.stringify(obj);
console.log(jsonObj);

console.log(typeof jsonObj);

//json to obj
const newObj = JSON.parse(jsonObj);
console.log(newObj);
console.log(typeof newObj);



let arr = [2, 3, 4, 5, 6];

const mapArr = arr.map((ele) => ele + 2);
console.log(mapArr);

const reducedArr = arr.reduce((acc, ele) => {
    acc += ele;
    return acc;
}, 0);
console.log(reducedArr);

const filterArray = arr.filter((ele)=>ele%2===0);
console.log("Filtered array");
console.log(filterArray);


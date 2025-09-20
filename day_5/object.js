const car = {
    brand : "Mahindra",
    model : "xuv-700",
    yaer : 2021
}
console.log(car.model);
function changeModel(obj){
    obj.model = "suv";
}
changeModel(car)
console.log(car.model);



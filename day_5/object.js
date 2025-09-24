const car = {
    brand : "Mahindra",
    model : "xuv-700",
    yaer : {
        y1: 2020,
        y2:2021    
    }
}
//accessing the properties
//1. using dot operator
console.log(car.model);
console.log(car['brand']);

function changeModel(obj){
    obj.model = "suv";
    obj.yaer.y1 = 2022;
    obj['yaer']['y2'] = 2024;
}
changeModel(car);
console.log(car.model);
console.log(car.yaer.y1)



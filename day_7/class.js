const stu3 = {
    rollno:3,
    name:"pqr"
}
class Student {
    constructor(rollno,name){
        this.rollno = rollno;
        this.name = name;
    }
    greet(){
        return `Hello ${this.name}`;
    }
}
let stu1 = new Student(1,"xyz");
let stu2 = new Student(2,"abc");
console.log(stu1.greet());

console.log(stu1);
console.log(stu2);

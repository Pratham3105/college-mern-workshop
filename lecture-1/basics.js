// let a = NaN
// console.log(typeof a); // number

let b = ['a','23','pratham']
console.log(typeof b); // object
console.log(typeof Object); // function

// var, let, const
// variable with the var can be re-declare
// variable with the let can not be re-declare
var a = 10
var a = 11
console.log(a); // 11

let num = 23
// let num; error

const int = 45;

let score = 80;
let attendence = 75;

if(score>=75 && attendence >=75){
    console.log("Grade A")
}
else if(score>=50 && attendence >=50){
    console.log("Grade B");
}
else if(score>=25 && attendence >=25){
    console.log("Grade c");
}
else{
    console.log("Fail");
}
// Grade A

let year;
console.log(year); // undefied
year = 2005
console.log(year); // 2005



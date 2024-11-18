console.log({}=={}); // false
console.log([]==[]); // false
//  each with a unique reference in memory.
console.log(JSON.stringify([])==JSON.stringify([])); // true
// non primirive data type as referenced, they are unlike , store in the other memory spacw

function sum (a=20,b=30){
    // let a = 5; // error - a is already defined
    var a = 5;
    console.log(a+b);
}
sum(50,50) // 100
sum(50,null) // 50
sum(null,null) // 0
sum(undefined,40) // 60
sum(undefined,undefined) // 50
sum(0,undefined) // 30



// Hoisting in JavaScript is a process that moves the declarations of variables, functions, classes, or imports to the top of their scope before the code is executed


// var Hoisted with a default value of undefined
console.log(num); // undefined
var num = 5

// let Hoisted without a default initialization
// console.log(a); // error
// let a = 5;

// but in this we initialised let so answer is undefined
let a;
console.log(a); //undefined
a = 6
console.log(a); // 6

// hoisting in function

sum() // hello
function sum(){
    console.log("hello");
}

// add() // error : add is not a function
console.log(add); // undefined
var add = function(){
    return 2+2
}

// sub()
// console.log(sub);
// error : Cannot access 'sub' before initialization
let sub = function(){
    console.log("pratham");
}

// same in the arrow function
// add() // error : add is not a function
console.log(mul); // undefined
var mul = ()=>{
    return 2+2
}

// div()
// console.log(div);
// error : Cannot access 'div' before initialization
let div =()=>{
    console.log("pratham");
}









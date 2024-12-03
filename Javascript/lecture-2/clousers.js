function out(){
    let user = "out"
    console.log(user)
    function inn(){
        console.log("in");
    }
    return inn
}
let inner  = outer()
inner()

function outer(){
    function inner(){
        console.log("inner");
    }
    return inner
}
let data = outer()
data() // inner
console.log(data); // [Function: inner]
// function inner(){
//     console.log("inner");
// }

// in this clousers applies
// A closure in JavaScript is a feature where a function retains access to its surrounding scope, even after that function has finished executing. This concept allows inner functions to "remember" and access variables defined in their outer scope even after the outer function has returned
function outerr(){
    let user='hello'
    console.log('outer');
    function innerr(){
        console.log(user);
    }
    return innerr
}
let innerr = outerr()
innerr();

// after the return of the outer function it is deleted and one copies of it give to innerr variable along with the innerr function 

// When you call outerr() and assign it to let innerr, you effectively store a reference to the innerr function returned by outerr.
// The innerr function has access to variables in its outer function (outerr), even after outerr has finished executing. This is because innerr forms a closure that retains access to outerr's local scope.


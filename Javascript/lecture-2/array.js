let arr = [1, 2, 3, 4, 5]

for (let i in arr) {
    console.log(i); // 0 1 2 3 4
}

for (let i of arr) {
    console.log(i); // 1 2 3 4 5
}


// forEach return undefined
let forEachData = arr.forEach((a, b, c) => {
    console.log(a, b, c)
    // 1 0[1, 2, 3, 4, 5]
    // 2 1[1, 2, 3, 4, 5]
    // 3 2[1, 2, 3, 4, 5]
    // 4 3[1, 2, 3, 4, 5]
    // 5 4[1, 2, 3, 4, 5]
})
console.log(forEachData);


// map function returned in the new array
let mapdata = arr.map((a, b, c) => {
    console.log(a, b, c)
    // 1 0[1, 2, 3, 4, 5]
    // 2 1[1, 2, 3, 4, 5]
    // 3 2[1, 2, 3, 4, 5]
    // 4 3[1, 2, 3, 4, 5]
    // 5 4[1, 2, 3, 4, 5]
    return a>2
})
console.log(mapdata); // [ false, false, true, true, true ]


let filterData = arr.filter((a,b,c)=>{
    return a>2
})
console.log(filterData); // [ 3, 4, 5 ]



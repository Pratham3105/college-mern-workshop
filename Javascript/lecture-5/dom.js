// let heading = document.querySelector('h1')
// let heading = document.querySelectorAll('h1')
// console.log(heading);
// heading.style.color = 'red' // only one h1 is colored

// heading[0].style.color = "red"
// heading[1].style.color = 'green'

// for(let i of heading){
//     i.style.color = 'aqua'
// }

// let h1 = document.getElementsByClassName('two') // class are variours so its take an array
// h1[0].style.color = 'red'
// h1[1].style.color = 'green'

// let head = document.getElementById('one')
// head.style.color = 'yellow'

//------------------------------------

let div = document.querySelector('div')
let h1 = document.createElement('h1')
let p = document.createElement('p')
div.append(h1,p)
h1.innerText = 'innertext'
p.innerText = 'inner p tag'
console.log(div);

//------------------------------------

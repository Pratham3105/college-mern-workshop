let btn = document.querySelector('button')
let inp = document.querySelector('input')
let ul = document.querySelector('ul')

btn.addEventListener('click',()=>{
    let li = document.createElement('li')
    li.innerText = inp.value
    ul.append(li)
    console.log(inp.value)
    inp.value = ''
})

// let bodyTag = document.querySelector('body')
// function func(){
//     console.log('HIIIII')
//     bodyTag.style.backgroundColor = 'blue'
// }

let btn = document.querySelector('button')
btn.addEventListener('click', () => {
    console.log('Hello World');

})
let inp = document.querySelector('input')
let h2 = document.querySelector('h2')
inp.addEventListener('input', (e) => {
    // console.log(e.target.value)
    h2.innerText = e.target.value

})
let img = document.querySelector('img')
// img.setAttribute('src','google.png')
let imgAddress = ['google.png', 'html.png', 'js.png', 'mern.png', 'mongo.png']

num =0
setInterval(() => {
    img.setAttribute('src', imgAddress[num])
    // num=num+1
    // if(num==4){
    //     num=0
    // }
    num=(num+1)%imgAddress.length
}, 1000);



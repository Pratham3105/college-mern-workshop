// let apiKey='9f6290d6cda9a36a63755fadee71f83d'
// let city='jabalpur'
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).
// then((res)=>{
//     return res.json()

// }).then((data)=>{
//     console.log(data,"heheh");


// })


let inp = document.querySelector('input')
let btn = document.querySelector('button')
let h3 = document.querySelector('h3')
let p = document.querySelector('p')
btn.addEventListener('click', () => {
    let apiKey = '9f6290d6cda9a36a63755fadee71f83d'
    let city = inp.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
        h3.innerText = data.name
        p.innerText = data.main.temp
    })

})



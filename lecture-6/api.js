let img = document.querySelector('img')
let h3 = document.querySelector('h3')

fetch("https://dummyjson.com/recipes").then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.recipes)
    index=0
    setInterval(() => {
        img.setAttribute('src', data.recipes[index].image)
        h3.innerText = data.recipes[index].name
        index+=1
        if(index==29){
            index=0
        }
    }, 2000);
})
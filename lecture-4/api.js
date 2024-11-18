// API
fetch('https://dummyjson.com/recipes').then((data)=>{
    return data.json()
    // console.log(data);
}).then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err);
})
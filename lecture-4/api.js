// API
fetch('https://dummyjson.com/recipes').then((data)=>{
    return data.json()
    // console.log(data);
}).then((a)=>{
    // console.log(a)
    // console.log(a.recipes[1].name);

    // a.recipes.map((value)=>{
    // console.log(value.id);
    // console.log(value.name);
    // })

    let data = a.recipes.filter((value)=>{
        return value.cuisine=="Indian"
    })
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
})
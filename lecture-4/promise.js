let promise = new Promise((res,rej)=>{
    let reason = false
    if(reason){
        rej("Mai to nhi aaunga")
    }
    else{
        res("Mai to aaunga")
    }
})
promise.then((data)=>{
    console.log(data)
}).catch(function(data){
    console.log(data);
})
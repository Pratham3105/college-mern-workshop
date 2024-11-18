let promise = new Promise((res, rej) => {
    let reason = false
    if (reason) {
        rej("Mai to nhi aaunga")
    }
    else {
        res("Mai to aaunga")
    }
})
promise.then((data) => {
    console.log(data)
}).catch((data) => {
    console.log(data);
})


function step1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('select');
            res()
        }, 1000)
    })
}
function step2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('filter');
            res()
        }, 1000)
    })
}
function step3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('caption');
            res()
        }, 1000)
    })
}
function step4() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('post');
            res()
        }, 1000)
    })
}


// step1().then(() => {
//     return step2().then(() => {
//         return step3().then(() => {
//             step4()
//         })
//     })
// })

async function call(){
    await step1()
    await step2()
    await step3()
    await step4()
}
call()


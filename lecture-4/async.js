function step1(fn){
    setTimeout(() => {
        console.log("select")
        fn()
    },4000);
}
function step2(fn){
    setTimeout(() => {
        console.log("filter")
        fn()
    },4000);
}
function step3(fn){
    setTimeout(() => {
        console.log("caption")
        fn()
    },4000);
}
function step4(){
    setTimeout(() => {
        console.log("post")
    },4000);
}

// step1()
// step2()
// step3()
// step4()

step1(function(){
    step2(function(){
        step3(function(){
            step4()
        })
    })
})
// let fs = require('fs')
// fs.writeFileSync('index.html','hello')
// let data = fs.readFileSync('index.html')
// console.log(data); // <Buffer 68 65 6c 6c 6f>
// console.log(data.toString()); // hello

// fs.unlinkSync('index.html')

// npm nodmon start

// let express = require('express')
// let app = express()

// app.use((req, res, next) => {
//     // res.send('restrict You')
//     next()
// })
// // app.use((req,res)=>{
// //     // res.send('restrict you again')
// //     next()
// // })

// app.get('/', (req, res) => {
//     res.send('Home Page')
// })



// https://localhost:8000/search?firstname=prashnat&&lastname=yadav
// app.get('/search',(req,res)=>{
//     let {firstname,lastname} = req.query
//     res.send(`${firstname} ${lastname}`)
// })

// // Dynamic Rounting
// app.get('/:name', (req, res) => {

//     // let data = req.params
//     // console.log(data); // { name: 'pratham' }
//     // res.send(data)

//     let { name } = req.params
//     res.send(name)
// })


// // app.get('/about',(req,res)=>{
// //     res.send('About Page')
// // })
// // app.get('/*',(req,res)=>{
// //     res.send('Page Not Found')
// // })

// app.listen('8000', () => {
//     console.log('Server running on port number 8000');

// })


// MongoDB

let express=   require('express')
 let mongoose=   require('mongoose')
 mongoose.connect('mongodb://127.0.0.1:27017/BGMI').then(()=>{
   console.log('chal gyaaaa...db'); 
 }).catch((err)=>{
   console.log(err);
 })
let app=    express()
app.get('/',(req,res)=>{
   res.send('hellooo')

})
app.listen(2000,()=>{
   console.log('server running on port no 2k');
   
})



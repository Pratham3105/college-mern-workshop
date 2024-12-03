// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'
// const App = () => {
//     let [count,SetCount]=     useState(0)
//   // Hook
//   // let count=0
//   function fun1(){
//     SetCount(count+2)
//     // console.log('heheheheh'); 
//   }
//   function fun2(){
//     SetCount(count-2)
//     // console.log('heheheheh'); 
//   }
//   function fun3(){
//     SetCount(0)
//     // console.log('heheheheh'); 
//   }
//   return (
//     <div> 
//       <h1> {count}</h1> 
//       <button onClick={fun1}>++</button>
//       <button onClick={fun2}>--</button>
//       <button onClick={fun3}>reset</button>

//      </div> 
//   )
// }
// export default App

// import React, { useState } from 'react'
// const App = () => {
//   let [color,SetColor]=useState('green')
//   function fun1(){
//     SetColor('red')
//   }
//   return (
//     <div style={{backgroundColor:color,height:"100vh"}}>
//       <button onClick={fun1}>red</button>
//       <button onClick={ ()=>{SetColor('yellow')}}>yellow</button>
//       <button onClick={ ()=>{SetColor('blue')}}>blue</button>
//       <button onClick={ ()=>{SetColor('black')}}>black</button>


//     </div>
//   )
// }

// export default App

//25-11-2024
// ********************************************************************************************

// import React, { useEffect, useState } from 'react'

// const App = ({a}) => {
//   let arr = [1,2,3,4,5,6]
//   return (
//     <div>
//       {
//         arr.map((a)=>{
//           return (
//             <div>
//               <li>{a}</li>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// import React, { useEffect, useState } from 'react'
// const App = () => {
//   // console.log('helloooooo');
//   let [count, SetCount] = useState(1)
//   let [state, SetState] = useState('delhi')

//   useEffect(() => {

//     fetch('https://dummyjson.com/recipes').then((res) => {
//       return res.json()
//     }).then((data) => {
//       console.log(data);
//     })

//   }, [count])


//   function fun1() {
//     SetCount(count + 1)
//   }
//   function fun2(){
//     SetState('Jabalpur')
//   }
//   return (
//     <div>
//       <h2> {count}</h2>
//       <button onClick={fun1}> click</button>
//       <h2>{state}</h2>
//       <button onClick={fun2}> click</button>
//     </div>
//   )
// }

// export default App

// Date : 26-11-2024
//*****************************************************************************

// import React, { useEffect, useState } from 'react'
// import './App.css'

// const App = () => {
//   let [apiData, setApiData] = useState([])
//   useEffect(() => {
//     fetch('https://dummyjson.com/recipes').then((res) => {
//       return res.json()
//     }).then((data) => {
//       setApiData(data.recipes)
//     })
//   }, [])

//   function d(id) {
//     console.log(id, "hehehehe");
//     let filterData = apiData.filter((a, b) => {
//     return b != id
//   })
//     setApiData(filterData)
//   }

//   return (
//     <div>
//       {
//         apiData.map((val,index) => {
//           return (
//             <div id="main">
//               <div id="card" onClick={() => d(index)}>
//                 <img src={val.image} />
//                 <h4> {val.name} </h4>
//               </div >
//             </div>
//           )
//         })
//       }
//     </div>
//   )

// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = ()=>{
//   let [data,setData] = useState('')
//   function func(e){
//     setData(e.target.value)
//   }
//   function store(){
//     localStorage.setItem('user',data)
//   }
//   return(
//     <div>
//       <h1>{data}</h1>
//       <input onChange={func} placeholder='Enter Your Name' />
//       <button onClick={store}>Click</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   let [input,SetInput]=useState({
//     name:"",
//     email:"",
//     passWord:""

//   })
//   function fun1(a){
//     let {name,value}=a.target
//     // console.log(name,value,'hellloo');
//     SetInput({...input,[name]:value})
//     console.log(input,"isse dekhooo");

//         // console.log(   a.target);
      
//     // SetInput(a.target.value)
//   }
//   function done(){
//     localStorage.setItem('user',Json.stringify(input))
//   }
//   return (
//     <div>
//     <fieldset>  
//       <legend> Form</legend>
//       <form>
//         <input onChange={fun1} name='name' value={input.name}  placeholder='Enter your name' />
//         <br></br>
//         <br></br>

//         <input placeholder='Enter email'  name='email'  value={input.email} onChange={fun1}  />
//         <br></br>
//         <br></br>
//         <input  type='password'  onChange={fun1}  name='passWord'  value={input.passWord} placeholder='Enter password' />
//         <br></br>
//         <br></br>
//         <button onClick={done}>Save</button>
//       </form>
//       </fieldset>
//     </div>
//   )
// }

// export default App

// Date : 27-11-2024
// ********************************************************************************

// import React from "react";
// import NavBar from "./NavBar"
// import { Route,Routes } from 'react-router-dom'
// import './App.css'


// export const App =()=>{
//   return(
//     <div>
//       <NavBar/>
//       route
//     </div>
//   )
// }

// import React from 'react'
// import NavBar from './NavBar'
// import './App.css'
// import { Route,Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// const App = () => {
//   // npm  i react-router-dom
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route  path='/'  element={<Home/>}/>
//         <Route  path='/about'  element={<About/>}/>
//         <Route  path='/contact'  element={<Contact/>}/>


//       </Routes>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import NavBar from './NavBar'
// import './App.css'
// import { Route,Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Signup from './Signup'
// import Login from './Login'
// const App = () => {
//   // npm  i react-router-dom
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route  path='/'  element={<Home/>}/>
//         <Route  path='/about'  element={<About/>}/>
//         <Route  path='/contact'  element={<Contact/>}/>
//         <Route  path='/signup'  element={<Signup/>}/>
//         <Route  path='/login'  element={<Login/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App

// 28-11-2024
// **************************************************************************

// import React, { useState } from 'react'

// const App = () => {
//   let [count,SetCount]=useState(0)
//   return (
//     <div>
//       <h2> {count}</h2>
//       <button onClick={()=>SetCount(count+1)}> click</button>
//     </div>
//   )
// }

// export default App





// import React, { useReducer } from 'react'

// const App = () => {
//   function reduser(count,action){
//     if(action.type==='incre'){
//       return count+1

//     }
//     else if(action.type==='d'){
//       return count-1
//     }
//     else if(action.type==='reset'){
//       return 0
//     }
//     else{
//       return count
//     }

//   }
//       let [count,disptach]=      useReducer(reduser,0)
//       function fun1(){
//         disptach({
//           type:"incre"

//         })


//       }
//   return (
//     <div>
//       <h2> {count}</h2>
//       <button  onClick={fun1}>++</button>
//       <button  onClick={()=>disptach({type:'d'})}>--</button>
//       <button  onClick={()=>disptach({type:'reset'})}>reset</button>


//     </div>
//   )
// }

// export default App


// import React, { useReducer } from 'react'

// const App = () => {
//   function reduser(color,action){{
//     if(action.type=='red'){
//       return color='red'
//     }
//     else if(action.type=='green'){
//       return color='green'
//     }
//     else if(action.type=='yellow'){
//       return color='yellow'
//     }
//     else{
//       return color
//     }
//   }
 

//   }
//   let [color,disptach]=useReducer(reduser,'gold')
//   return (
//     <div style={{backgroundColor:color,height:'400px'}}>
//       <button onClick={()=>disptach({type:"red"})}>red</button>
//       <button onClick={()=>disptach({type:"green"})}>green</button>
//       <button onClick={()=>disptach({type:"yellow"})}>yellow</button>

//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Home from './Home.jsx'
// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App


// import React,{useState} from 'react'
// import NavBar from './NavBar'
// import './App.css'
// import { Route,Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Signup from './Signup'
// import Login from './Login'
// import Cart from './Cart'
// const App = () => {
//   // npm  i react-router-dom
//   let [cartData,SetCartData]=useState([])
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route  path='/'  element={<Home cartData={cartData}  SetCartData={SetCartData}/>}/>
//         <Route  path='/about'  element={<About/>}/>
//         <Route  path='/contact'  element={<Contact/>}/>
//         <Route  path='/signup'  element={<Signup/>}/>
//         <Route  path='/login'  element={<Login/>}/>
//         <Route  path='/cart'  element={<Cart  cartData={cartData}/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App


import React from 'react'
// import Home from './Home.jsx'
import SignUp from './SignUp.jsx'
import { Route, Routes } from 'react-router-dom'
import Login from './Login.jsx'
const App = () => {
  return (
    <div>
      {/* <Home/> */}
  
      <Routes>
        <Route   path='/'  element={<SignUp/>}/>
        <Route   path='/login'  element={<Login/>}/>

      </Routes>
    </div>
  )
}

export default App
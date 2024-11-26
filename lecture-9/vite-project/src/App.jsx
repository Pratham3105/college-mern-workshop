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

import React, { useEffect, useState } from 'react'
const App = () => {
  // console.log('helloooooo');
  let [count, SetCount] = useState(1)
  let [state, SetState] = useState('delhi')

  useEffect(() => {

    fetch('https://dummyjson.com/recipes').then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data);
    })

  }, [count])

  
  function fun1() {
    SetCount(count + 1)
  }
  function fun2(){
    SetState('Jabalpur')
  }
  return (
    <div>
      <h2> {count}</h2>
      <button onClick={fun1}> click</button>
      <h2>{state}</h2>
      <button onClick={fun2}> click</button>
    </div>
  )
}

export default App



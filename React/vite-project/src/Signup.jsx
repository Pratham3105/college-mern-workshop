// import React, {useState} from "react";
// import { useNavigate } from 'react-router-dom'

// const Signup = () => {
//     let navigate = useNavigate()
//     let [input,setInput] = useState({
//         name :"",
//         email :"",
//         password :""
//     })
//     function fun1(e){
//                 e.preventDefault()
//                 let {name,value}= e.target
//                 setInput({...input,[name]:value})
        
        
//     }
//     function done(){
//         localStorage.setItem('user',JSON.stringify(input))
//         navigate('/login')
//     }
//     return (
//         <div>
//             <fieldset>
//             <input onChange={fun1}  name='name'  value={input.name} type="text" placeholder="Enter Your name" />
//             <br /><br /><br /><br />
//             <input onChange={fun1} name='email'  value={input.email} type="text" placeholder="Enter Your Email" />
//             <br /><br /><br /><br />
//             <input onChange={fun1} name='password'  value={input.password} type="password" placeholder="Enter Your Password" />
//             <br /><br /><br /><br />
//             <button onClick={done} >Submit</button>
//             </fieldset>
            
//         </div>
//     )
// }

// export default Signup

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const SignUp = () => {
  let navigate=     useNavigate()
    let [input,SetInput]=useState({
        firstName:"",
        lastName:"",
        email:"",
        passWord:""
    })
    function fun1(e){
        e.preventDefault()
        let {name,value}= e.target
        SetInput({...input,[name]:value})


    }
      async function done(){
      let res=    await axios.post('http://localhost:5000/create',input)
      console.log(res,'hello');
      
        // console.log(input,"hehehe");
        // localStorage.setItem('user',JSON.stringify(input))
        // navigate('/login')
        
    }
  return (
    <div>
        <fieldset> 
     
         <input  onChange={fun1}  name='firstName'  value={input.firstName} placeholder='Enter your firstName'/>
         <br></br>
         <br></br>
         <input  onChange={fun1}  name='lastName'  value={input.lastName} placeholder='Enter your lastName'/>
         <br></br>
         <br></br>
         <input  onChange={fun1} name='email'  value={input.email}  placeholder='Enter your email'/>
         <br></br>
         <br></br>
         <input  type='password'   name='passWord'  value={input.passWord} onChange={fun1} placeholder='Enter your password'/>
         <br></br>
         <br></br>
         <button onClick={done} type='submit' >save</button>
    
        </fieldset>
    </div>
  )
}

export default SignUp
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    let navigate = useNavigate()
    let [input,setInput] = useState({
        name :"",
        email :"",
        password :""
    })
    function fun1(e){
                e.preventDefault()
                let {name,value}= e.target
                setInput({...input,[name]:value})
        
        
    }
    function done(){
        localStorage.setItem('user',JSON.stringify(input))
        navigate('/login')
    }
    return (
        <div>
            <fieldset>
            <input onChange={fun1}  name='name'  value={input.name} type="text" placeholder="Enter Your name" />
            <br /><br /><br /><br />
            <input onChange={fun1} name='email'  value={input.email} type="text" placeholder="Enter Your Email" />
            <br /><br /><br /><br />
            <input onChange={fun1} name='password'  value={input.password} type="password" placeholder="Enter Your Password" />
            <br /><br /><br /><br />
            <button onClick={done} >Submit</button>
            </fieldset>
            
        </div>
    )
}

export default Signup

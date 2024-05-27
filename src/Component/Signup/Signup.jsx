import React from 'react'
import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../Actions/AuthAction';

const Signup = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('');
    const dispatch =useDispatch();
    // const message = useSelector(state =>state.auth.message)
    const handleSignup =()=>{
   const res= dispatch(signup({email,password}))
   console.log("res",res);
    }

  return (
    <div className='container'>
    <h4>Signup</h4> <br />
    <form>
        <input type='email' placeholder='enter your email' value={email} className='email' onChange={(e)=>setEmail(e.target.value)} />
       <br /> 
        <input type='password' placeholder='enter your password' value={password} className='password' onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <button type='submit' onClick={handleSignup}>Signin</button>
    </form>
</div>
  )
}

export default Signup
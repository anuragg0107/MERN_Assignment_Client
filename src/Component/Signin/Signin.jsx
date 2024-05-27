import React from 'react'
import "./Singin.css";
const Signin = () => {
  return (
    <div className='container'>
        <h4>Signin</h4> <br />
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type='email' placeholder='enter your email' className='email' />
           <br /> 
            <input type='password' placeholder='enter your password' className='password' />
            <br />
            <button type='submit'>Signin</button>
        </form>
    </div>
  )
}

export default Signin;
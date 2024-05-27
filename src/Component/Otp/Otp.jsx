import React from 'react'

const Otp = () => {
  return (
    <div className='container'>
    <h4>Otp Verification</h4> <br />
    <form onSubmit={(e)=>e.preventDefault()}>
        <input type='text' placeholder='Enter otp' className='email' />
       <br /> 
        <button type='submit'>Submit</button>
    </form>
</div>
  )
}

export default Otp
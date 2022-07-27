import React from 'react'

const Signin = () => {
  return (
    <div>This is our Signin Section

      <div className='max-w-[700px] mx-auto my-16 p-4 '>

      This is the Sign Up Section
      <div>
          <h1 className='text-2xl font-bold py-2'>Sign Up for an Account</h1>
          <p className='py-2'>
            Already have an account? <Link to="/" className='underline'> Sign in </Link> 
          </p>
      </div>

      <form> 
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium' htmlFor=""> Email Address</label>
            <input className='border p-3' type="email"/>
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium' htmlFor=""> Password</label>
            <input className='border p-3' type="password"/>
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium' htmlFor=""> Confirm Password</label>
            <input className='border p-3' type="password"/>
          </div>
          <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign up</button>

      </form>

    </div>

    </div>
    
  )
}

export default Signin
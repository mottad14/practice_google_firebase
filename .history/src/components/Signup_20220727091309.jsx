import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
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
            <label htmlFor=""> Email Address</label>
            <input type="email"/>
          </div>
          <div className='flex flex-col py-2'>
            <label htmlFor=""> Password</label>
            <input type="password"/>
          </div>
          <div className='flex flex-col py-2'>
            <label htmlFor=""> Confirm Password</label>
            <input type="password"/>
          </div>
          <button>Sign up</button>

      </form>

    </div>
  )
}

export default Signup
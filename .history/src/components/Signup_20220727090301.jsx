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

    </div>
  )
}

export default Signup
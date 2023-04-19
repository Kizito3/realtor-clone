import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function Forgot() {
 
  // declaring the value of email
  const [email, setEmail] = useState("");

  // creating the onchange function
  // function will get event as we are typing on the input fields and helping in retrieving the password
  function onChange(e){
      setEmail (e.target.value);
  }
  return (
    <section>
      <h1 
      className='text-3xl text-center mt-6 font-bold'
      >
        Forgot Password
      </h1>
      <div 
      className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'
      >
        <div 
        className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'
        >
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="key" className='rounded-2xl w-full ' 
        />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input 
            className='mb-6 rounded w-full px-4 py-2 text-xl text-gray-700 bg-white transition ease-in-out border-none outline-none'
            id='email' 
            value={email} 
            placeholder='Email Address' 
            onChange={onChange} type="email" 
            />

           

            <div className='flex justify-between mb-6 whitespace-nowrap text-sm sm:text-lg'>
              <p>Don't have an account?
                <Link to="/sign-up" className='ml-2 text-red-500 hover:text-black hover:underline'>Register</Link>
              </p>
              <p>
                <Link to="/sign-in" className='text-blue-600'>Sign in instead</Link>
              </p>
            </div>
            <button 
            className='rounded shadow-lg uppercase w-full px-4 py-2
            text-xl text-white bg-blue-500 border-none hover:bg-blue-800 
            hover:text-white hover:transition duration-300 mb-4' 
            type='submit'
            >
            Send Reset email
            </button>

            <div className='flex my-4 items-center before:border-t before:flex-1  before:border-gray-400 after:border-t after:flex-1  after:border-gray-400'>
              <p className='text-center mx-4 font-semibold'>OR</p>
            </div>
            <OAuth/>
          </form>
        </div>
      </div>
    </section>
  )
}

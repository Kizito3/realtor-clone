import React from 'react'
import {FcGoogle} from 'react-icons/fc';

function OAuth() {
  return (
    <button 
      className='flex items-center justify-center w-full
       bg-red-500 hover:bg-red-700 text-sm font-semibold
       active:bg-red-800 text-white py-3 px-7 uppercase rounded shadow-lg hover:shadow-xl'> 
      <FcGoogle className='bg-white text-2xl rounded-full mx-2'/>
      Continue with Google
    </button>
  )
}

export default OAuth
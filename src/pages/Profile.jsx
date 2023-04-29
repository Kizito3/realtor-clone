import { getAuth, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData,  setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email, 
  });
  
  const {name, email} = formData;
  // signout functionality
  function onLogout () {
    auth.signOut(); 
    navigate("/");
  }
  return (
    <>
      <section className='max-w-6xl mx-auto flex items-center flex-col'>
        <h1 
        className='text-3xl text-center font-bold mt-6'
        > My Profile
        </h1>
        <div className='w-full md:w-[50%] mt-6 px-4'>
          <form>
              <input type="text" id='name' value={name} disabled className='w-full mb-6 transition ease-in-out border-none outline-none px-4 text-xl text-gray-700 bg-white border-gray-400 rounded'/>
              <input type="text" id='email' value={email} disabled className='w-full mb-6 transition ease-in-out border-none outline-none px-4 text-xl text-gray-700 bg-white border-gray-400 rounded'/>
              <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
                <p>Wish to change your name? <span className='cursor-pointer text-red-600 hover:text-red-800 font-semibold ml-1'>Edit</span></p>
                <p onClick={onLogout} className='cursor-pointer text-blue-500 hover:text-blue-800 font-semibold'>Sign out</p>
              </div>
          </form>
        </div>
      </section>
    </>
  )
}

import { getAuth, updateProfile} from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import {toast} from "react-toastify";
import {FcHome} from "react-icons/fc";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  // hook for editing your details
  const [changeDetail, setChangeDetail] = useState(false)
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
  // edit functionality
  function onChange (e) {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  async function onSubmit(){
     try {
      if (auth.currentUser.displayName !== name) {
        // update the display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName:name,
        });
        // update name in the firestore
        const docRef = doc(db, "users",auth.currentUser.uid)
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("Details updated");
     } catch (error) {
      toast.error("Failed to update details");
     }
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
              <input 
              type="text" id='name' 
              value={name} 
              disabled={!changeDetail} 
              onChange={onChange} 
              className={`w-full mb-6 transition ease-in-out border-none outline-none px-4 text-xl text-gray-700 bg-white border-gray-400 rounded1 ${changeDetail && "bg-red-200 focus:bg-red-200"}`}/>
              <input type="text" id='email' value={email} disabled className={`w-full mb-6 transition ease-in-out border-none outline-none px-4 text-xl text-gray-700 bg-white border-gray-400 rounded`}/>
              <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
                <p>Wish to change your name? 
                  <span 
                  onClick={()=> {
                    changeDetail && onSubmit()
                    setChangeDetail((prevState)=>!prevState)
                  }}
                  className='cursor-pointer text-red-600 hover:text-red-800 font-semibold ml-1'
                  >{changeDetail ? "Apply change" : "Edit"}
                  </span>
                </p>
                <p onClick={onLogout} className='cursor-pointer text-blue-500 hover:text-blue-800 font-semibold'>Sign out</p>
              </div>
          </form>
          <button type="submit" className='w-full bg-blue-500 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-lg hover:bg-blue-600 active:bg-blue-700'>
            <Link to="/create-listing" className='flex justify-center items-center'> 
            <FcHome className='mr-2 text-3xl bg-red-100 rounded-full p-1 border-2'/> Sell or rent your home
            </Link>
            </button>
        </div>
      </section>
    </>
  )
}

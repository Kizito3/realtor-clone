import React, { useState } from 'react'
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import {getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {db} from "../firebase";
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

export default function SignUp() {
  // creating hook to show password once clicked
  const [showPassword, setShowPassword] = useState(false);
  // declaring the value of email
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password} = formData;
  const navigate = useNavigate();

  // creating the onchange function
  // function will get event as we are typing on the input fields
  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  async function onSubmit(e){
     // preventing the refresh of the page
    e.preventDefault();
// initializing firebase auth (firebase authentification)
    try {
      // create a variable called auth
      const auth = getAuth()
      // create a variable called usercredential
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // to update the displayname of the currentuser in firebase
      updateProfile(auth.currentUser,{
        displayName : name
      });
      // getting the user
      // const user = userCredential.user;
      // const formDataCopy = { ...formData };
      // delete formDataCopy.password;
      // formDataCopy.timestamp = serverTimestamp();

      // await setDoc(doc(db, "users", user.uid), formDataCopy);
      const user = userCredential.user;
      // creating a variable that will get the data coming from the formdata we created already
      const formDataCopy = {...formData}
      // this will delete the password gotten from the formdata in order not to have it in the formdatacopy
      delete formDataCopy.password
      // this gets the exact time the user created an account or got authenticated gotten from firebase as well
      formDataCopy.timestamp = serverTimestamp();
      
      // saving the data into the database
      // the doc is getting three things ie the db, "users" and user.uid
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      // toast.success("Sign Up was Successful!!")
      navigate("/");

    } catch (error) {
      if (!email) {
        toast.error("Email input cannot be empty");
      }
      if (!name || !email || !password) {
        toast.error("Fill up all fields to sign up please!")
      }
      // toast.error("Something went wrong!");
    }
  }
  return (
    <section>
      <h1 
      className='text-3xl text-center mt-6 font-bold'
      >
        Sign up
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
        <form onSubmit={onSubmit}>
          <input 
            className='mb-6 rounded w-full px-4 py-2 text-xl text-gray-700 bg-white transition ease-in-out border-none outline-none'
            id='name' 
            value={name} 
            placeholder='Fullname' 
            onChange={onChange} type="text" 
            />

            <input 
            className='mb-6 rounded w-full px-4 py-2 text-xl text-gray-700 bg-white transition ease-in-out border-none outline-none'
            id='email' 
            value={email} 
            placeholder='Email Address' 
            onChange={onChange} type="email" 
            />

            <div 
            className=' mb-6 relative'
            >
            <input 
            className='rounded w-full px-4 py-2 text-xl text-gray-700 bg-white transition ease-in-out border-none outline-none'
             id='password' 
             value={password}
             placeholder='Password'
             onChange={onChange} 
             type={showPassword ? "text" : "password"}  
            
            />
            {/*condition to determine which icon to display  */}

            {showPassword ? <RxEyeOpen className='absolute right-3 top-3 cursor-pointer text-xl' onClick={()=> setShowPassword((prevState) => !prevState)}/>
             : < RxEyeClosed className='absolute right-3 top-3 cursor-pointer text-xl' onClick={()=> setShowPassword((prevState) => !prevState)}/>
            }
            </div>

            <div className='flex justify-between mb-6 whitespace-nowrap text-sm sm:text-lg'>
              <p>Already have an account?
                <Link to="/sign-in" className='ml-2 text-red-500 hover:text-black hover:underline'>Sign-in</Link>
              </p>
              <p>
                <Link to="/forgot" className='text-blue-600'>Forgot password</Link>
              </p>
            </div>
            <button 
            className='rounded shadow-lg uppercase w-full px-4 py-2
            text-xl text-white bg-blue-500 border-none hover:bg-blue-800 
            hover:text-white hover:transition duration-300 mb-4' 
            type='submit'
            >
            Sign up
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

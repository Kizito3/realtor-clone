import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react'
import {FcGoogle} from 'react-icons/fc';
import {toast} from "react-toastify";
import { db } from '../firebase';
import { useNavigate } from 'react-router';
function OAuth() {
  const navigate = useNavigate();
 async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      
      // check if the user is existing in the database
      const docRef = doc(db, "users", user.uid);
      // getting the user
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        });
      }
      navigate("/")
    } catch (error) {
      toast.error("Could not sign in with Google");
      
    }
  }
  return (
    <button 
      type='button'
      onClick={onGoogleClick}
      className='flex items-center justify-center w-full
       bg-red-500 hover:bg-red-700 text-sm font-semibold
       active:bg-red-800 text-white py-3 px-7 uppercase rounded shadow-lg hover:shadow-xl'> 
      <FcGoogle className='bg-white text-2xl rounded-full mx-2'/>
      Continue with Google
    </button>
  )
}

export default OAuth
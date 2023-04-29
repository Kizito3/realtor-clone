import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

export function useAuthStatus() {
    // creating the hook
    const [loggedIn, setLoggedIn] = useState(false);
    // hook that checks the status and state
    const [checkingStatus, setCheckingStatus] = useState(true);

    //  asking firebase if the user is authenticated or not

    useEffect(()=> {
        const auth = getAuth()
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setLoggedIn(true);
            }
            // loading finishes
            setCheckingStatus(false);
        })
    }, [])
  return {loggedIn, checkingStatus};
}

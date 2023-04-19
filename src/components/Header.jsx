import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Header() {
    // init the uselocation by puuting it in a variable
    const location = useLocation()
    // create a function to check for the right path and return it
    function pathMatchRoute(route) {
        if (route === location.pathname) {
          return true;
        }
      }
    // init the usenavigate by putting it in a variable
    const navigate = useNavigate()
  return (
    <div className='bg-white border-b shadow-xl sticky top-0 z-50 py-4'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Logo" className='h-6 cursor-pointer' onClick={()=> navigate("/")} />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li 
                    className={`py-3 text-gray-500 font-semibold text-sm border-b-[3px] border-b-transparent cursor-pointer ${pathMatchRoute("/") && "text-gray-800 border-b-red-700 text-xl"}`} 
                    onClick={()=> navigate("/")}
                    >Home
                    </li>
                    <li 
                    className={`py-3 text-gray-500 font-semibold text-sm border-b-[3px] border-b-transparent cursor-pointer ${pathMatchRoute("/offers") && "text-gray-800  border-b-red-700 text-xl"}`} 
                    onClick={()=> navigate("/offers")}
                    >
                    Offers
                    </li>
                    <l 
                    className={`py-3 text-gray-500 font-semibold text-sm border-b-[3px] border-b-transparent cursor-pointer ${pathMatchRoute("/sign-in") && "text-gray-800 border-b-red-700 text-xl"}`} 
                    onClick={()=> navigate("/sign-in")}
                    >
                    Sign in</l>
                </ul>
            </div>
        </header>
    </div>
  )
}
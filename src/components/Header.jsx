import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Header() {
    // init the uselocation by puuting it in a variable
    const location = useLocation()
    // create a function to check for the right path and return it
    function pathMathRoute(route){
        if (route === location.pathname) {
            return true;
        }
    }
    // init the usenavigate by putting it in a variable
    const navigate = useNavigate()
  return (
    <div className='bg-white border-b shadow-md sticky top-0 z-50 py-4'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Logo" className='h-6 cursor-pointer' onClick={()=> navigate("/")} />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`py-3 text-gray-500 font-semibold text-sm border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/") && "text-black border-b-red-400 text-lg"}`} onClick={()=> navigate("/")}>Home</li>
                    <li className={`py-3 text-gray-500 font-semibold text-sm border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/offers") && "text-black border-b-red-400 text-lg"}`} onClick={()=> navigate("/offers")}>Offers</li>
                    <l className={`py-3 text-gray-500 font-semibold text-sm border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/sign-in") && "text-black border-b-red-400 text-lg"}`} onClick={()=> navigate("/sign-in")}>Sign in</l>
                </ul>
            </div>
        </header>
    </div>
  )
}

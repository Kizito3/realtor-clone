import React, { useState } from 'react'

function CreateListing() {
    const [formData, setFormData] = useState({
        type: "rent",
        name: "",
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address: "",
        description: "",
        offer: false,
        price: 0,
        discountedPrice: 0,
    });
    const {type, name, bedrooms, bathrooms, parking, furnished,address, description, offer, price, discountedPrice} = formData;
    function onChange(){

    }
  return (
    <main className='max-w-md px-2 mx-auto'>
        <h1 
        className='text-3xl text-center mt-6 font-bold'
        >Create a Listing
        </h1>
        <form>
            <p className='text-lg mt-6 font-semibold'>Sell/Rent</p>
            <div className='flex'>
                <button 
                type='button' 
                id='type' 
                value="sell" 
                onClick={onChange} 
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full ${type === "rent" ? "bg-white text-black" : "bg-slate-700 text-white" }`}>
                    sell
                </button>

                <button 
                type='button' 
                id='type' 
                value="sell" 
                onClick={onChange} 
                className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full ${type === "sale" ? "bg-white text-black" : "bg-slate-700 text-white" }`}>
                   rent
                </button>
            </div>
            <p className='text-lg mt-6 font-semibold'>Name</p>
            <input 
            type="text" 
            placeholder='Property name' 
            maxLength="32" 
            minLength="10" 
            required 
            id='name' 
            value={name} 
            onChange={onChange} 
            className='w-full px-4 py-2 text-xl text-gray-500 bg-white border border-gray-400 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 mb-6'/>
            <div className='flex space-x-6 mb-6'>
                <div>
                    <p className='text-lg font-semibold'>Beds</p>
                    <input 
                    type="number" 
                    id="bedrooms" 
                    placeholder='3' 
                    onChange={onChange}
                    min="1"
                    max="20"
                    required
                    value={bedrooms}
                    className='w-full px-4 py-2 text-xl text-gray-500 bg-white border border-gray-400 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 text-center' />
                </div>
                <div>
                    <p className='text-lg font-semibold'>Baths</p>
                    <input 
                    type="number" 
                    id="bathrooms" 
                    placeholder='3' 
                    onChange={onChange}
                    min="1"
                    max="20"
                    required
                    value={bathrooms}
                    className='w-full  px-4 py-2 text-xl text-gray-500 bg-white border border-gray-400 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 text-center' />
                </div>
            </div>
            <p className='text-lg mt-6 font-semibold'>Parking spot</p>
            <div className='flex'>
                <button 
                type='button' 
                id='parking' 
                value={true} 
                onClick={onChange} 
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full ${!parking  ? "bg-white text-black" : "bg-slate-700 text-white" }`}>
                    Yes
                </button>

                <button 
                type='button' 
                id='parking' 
                value={false} 
                onClick={onChange} 
                className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full ${parking ? "bg-white text-black" : "bg-slate-700 text-white" }`}>
                   no
                </button>
            </div>
            <p className='text-lg mt-6 font-semibold'>Furnished</p>
            <div className='flex'>
                <button 
                type='button' 
                id='furnished' 
                value={true} 
                onClick={onChange} 
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full ${!furnished ? "bg-white text-black" : "bg-slate-700 text-white" }`}>
                   Yes
                </button>

                <button 
                type='button' 
                id='furnished' 
                value={false} 
                onClick={onChange} 
                className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full ${furnished ? "bg-white text-black" : "bg-slate-700 text-white" }`}>
                  no
                </button>
            </div>

            <p className='text-lg mt-6 font-semibold'>Address</p>
            <textarea 
            type="text" 
            placeholder='Address' 
            required 
            id='address' 
            value={address} 
            onChange={onChange} 
            className='w-full px-4 py-2 text-xl text-gray-500 bg-white border border-gray-400 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 mb-6'/>

            <p className='text-lg font-semibold'>Description</p>
            <textarea 
            type="text" 
            placeholder='Description' 
            required 
            id='description' 
            value={description} 
            onChange={onChange} 
            className='w-full px-4 py-2 text-xl text-gray-500 bg-white border border-gray-400 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-700 mb-6'/>

            <p className='text-lg font-semibold'>Offer</p>
            <div className='flex mb-6'>
                <button 
                type='button' 
                id='offer' 
                value={true} 
                onClick={onChange} 
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full ${!offer ? "bg-white text-black" : "bg-slate-700 text-white" }`}>
                   Yes
                </button>

                <button 
                type='button' 
                id='offer' 
                value={false} 
                onClick={onChange} 
                className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-lg rounded hover:shadow-xl focus:shadow-xl active:shadow-xl transition duration-150 ease-in-out w-full ${offer ? "bg-white text-black" : "bg-slate-700 text-white" }`}>
                  no
                </button>
            </div>
            <div className='flex items-center mb-6'>
                <div>
                <p className='text-lg font-semibold'>Regular price</p>
                
                <div className='flex w-full justify-center items-center space-x-6'>
                <input 
                    type="number" 
                    placeholder='0' 
                    required 
                    min="50"
                    max="500000000"
                    id='price' 
                    value={price} 
                    onChange={onChange} 
                    className='w-full px-4 py-2 text-xl text-gray-500 bg-white border border-gray-400 rounded transition duration-150 ease-in-out text-center focus:text-gray-700 focus:bg-white focus:border-slate-700'/>
                    {type === "rent" && (
                    <div>
                        <p className='text-md w-full whitespace-nowrap'>$/ Month</p>
                    </div>
                   )}
                   </div>
                </div>
                
            </div>
           {offer && (
            <div className='flex items-center mb-6'>
            <div>
            <p className='text-lg font-semibold'>Discounted price</p>
            
            <div className='flex w-full justify-center items-center space-x-6'>
            <input 
                type="number" 
                placeholder='0' 
                required={offer} 
                min="50"
                max="500000000"
                id='discountedPrice' 
                value={discountedPrice} 
                onChange={onChange} 
                className='w-full px-4 py-2 text-xl text-gray-500 bg-white border border-gray-400 rounded transition duration-150 ease-in-out text-center focus:text-gray-700 focus:bg-white focus:border-slate-700'/>
                {type === "rent" && (
                <div>
                    <p className='text-md w-full whitespace-nowrap'>$/ Month</p>
                </div>
               )}
               </div>
            </div>
            
        </div>
           )}
            <div className='mb-6'>
                <p 
                className='text-lg font-semibold'
                >Images</p>
                <p className='text-gray-500'>The first image will be the cover photo (max 6)</p>
                <input 
                type="file" 
                id="images" 
                onChange={onChange} 
                accept='.jpg,.png,.jpeg' 
                multiple 
                required
                className='w-full px-3 py-1.5 text-gray-600 bg-white border border-gray-400 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-400'/>
            </div>
            <button
            className='w-full mb-6 px-7 py-3 bg-blue-500 text-white font-medium text-sm uppercase rounded shadow-xl hover:bg-blue-600 hover:shadow-2xl focus:bg-blue-600 focus:shadow-2xl active:bg-blue-700 transition duration-150 ease-in-out' 
            type="submit">
            Create Listing
            </button>
        </form>
    </main>
  )
}

export default CreateListing
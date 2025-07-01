import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Prac4() {
    const[productList,setProductList]=useState([])

    const fetchApi = async()=>{
        try {
            const res = await fetch("https://dummyjson.com/products",{
            method:'GET',
        })
            const data =await res.json()
            setProductList(data?.products)
        } catch (error) {
            console.error("Failed to fetch products:",error)
            
        }
    }
    useEffect(()=>{
        fetchApi()
    },[])
    return (
    <div className='py-5 px-4 bg-gray-100 min-h-screen'>
        <h1 className='text-4xl text-center text-black font-bold mb-6'>Product List</h1>
        <div className='flex justify-center items-center gap-6 flex-wrap'>
            {productList.map((product) => (
            <div key={product.id}
            className="h-[250px] w-[180px] flex flex-col justify-between items-center border border-gray-300 rounded-2xl bg-white shadow-md p-3"
            >
            <img
                src={product.images[0]}
                alt={product.title}
                className='h-32 w-full object-cover rounded-md'/>
            <p className='text-sm font-semibold text-gray-800'>{product.brand}</p>
            <span className='text-blue-600 font-medium'>${product.price}</span>
            <button 
            className='px-3 py-1 text-sm mt-2 font-semibold rounded-full bg-blue-400 text-white hover:bg-red-500 transition duration-200'>
            Buy now</button>
            </div>
            ))}
        </div>    
    </div>
    )
}

export default Prac4

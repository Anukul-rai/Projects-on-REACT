import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Prac3() {
  const[input,setInput]=useState('')
  const[task,setTask]=useState([])
  const [img,setImg]=useState([])

  const apiFetch = async()=>{
    try {
      const res = await fetch("https://dummyjson.com/products",{
      method:"GET",
    })
    const data = await res.json()
    // console.log(data.products)
    setImg(data.products)
    
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    apiFetch()
  },[])

  const addTask=()=>{
    if (input != '') {
      setTask([...task,input])
      setInput('')
      
    } else {
      alert('enter a task')
    }
  }

  const delTask=(index)=>{
    setTask(task.filter((_,i)=>i !== index))
  }
  return (
    <div className='w-full max-w-md bg-amber-50 p-6 rounded-2xl shadow-2xl'>
          <h1  className='text-3xl font-bold text-center py-2 mb-6'>Todo List</h1>
            <div className='flex gap-2 mb-2'>
                <input 
                    type="text"
                    placeholder='Enter a task..'
                    className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    value={input}
                    onChange={(e)=>setInput(e.target.value)} />
                <button
                    className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-3 rounded transition-colors'
                    onClick={addTask}
                  >Add</button>
            </div>

            {/* -----task list----- */}
            <ul className='flex flex-col'>
              {task.map((task,i)=>{
                return(<li
                key={i}
                className="flex items-center justify-between gap-4 bg-indigo-400 border-gray-200 rounded-xl shadow-md p-4 mb-4 w-full max-w-xl"   >
                <img
                  src={img[i % img.length]?.images[0]}
                  alt={img.id}
                  className="h-20 w-28 object-cover rounded-md shadow-xl bg-white"  />
                <p className="flex-1 text-gray-800 font-medium text-base px-2">
                  {task}
                </p>
                <button
                  onClick={() => delTask(i)}
                  className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                >Delete</button>
              </li>)})}
            </ul>
              </div>
  )
}

export default Prac3

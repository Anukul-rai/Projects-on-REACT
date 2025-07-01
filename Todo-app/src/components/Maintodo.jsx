import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

function Maintodo() {
  const[input,setInput]=useState('')
  const[task,setTask]=useState([])


  const addTask=()=>{
    if (input != '') {
      setTask([...task,input])
      setInput('')
      toast.success('Task Added Successfully')
    } else {
        toast.error('Please Enter a Task')
    }
  }

  const delTask=(index)=>{
    setTask(task.filter((_,i)=>i !== index))
    toast.success("Task Deleted Successfully")
  }
  return (
    <div className='w-full max-w-md bg-amber-50 p-6 rounded-2xl shadow-2xl'>
            <h1 className='text-3xl font-bold text-center py-2 mb-6'>Todo List</h1>
            <div className='flex gap-2 mb-2'>
                <input 
                    type="text"
                    placeholder='Enter a task..'
                    className='w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                />
                <button
                    className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-3 rounded transition-colors'
                    onClick={addTask}
                >Add
                </button>
            </div>
            <ul>
              {task.map((task,i)=>(
                <li key={i}
                className='bg-indigo-400 text-white font-semibold flex justify-between mb-3 rounded-md px-1.5 py-2 hover:bg-white hover:text-black'>{task}
                <button
                    className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-3 rounded transition-colors'
                    onClick={()=>delTask(i)}
                    >Delete
                </button></li>
              ))
              }
            </ul>
        </div>
  )
}

export default Maintodo

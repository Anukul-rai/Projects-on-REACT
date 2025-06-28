import React from 'react'

function Todolist({text,onDelete}) {

    
    return (
        <div className='flex flex-col items-center border p-4 rounded gap-2 bg-amber-100'>
            <ol className='flex flex-col justify-start text-2xl list-decimal'>
                <li className=' p-5 rounded-2xl '>
                    <p>{text}</p>
                </li>                
            </ol>
            <button className='border rounded px-2 py-1 cursor-pointer' onClick={onDelete}>Delete</button>
        </div>
  )
}

export default Todolist

import React, { useState } from 'react'

function AddBtn({onAdd}) {
    const [ input,setInput ]=useState('')

    const hanldeAdd=(e)=>{
        e.preventDefault()
        onAdd(input)
        setInput('')
        if(input.trim === '') return;
    }
    return (
        <form className='flex flex-row gap-0.5  justify-center' onSubmit={hanldeAdd}>
                <input 
                type="text"
                className='border-1 px-4 py-2 mb-4 mt-4 rounded' 
                placeholder='Enter a Todo...'
                value={input}
                onChange={(e) =>setInput(e.target.value)}
                />
                <button type='submit' className='border-1 mt-4 cursor-pointer px-4 py-2 mb-4 rounded'>Add</button>
        </form>
  )
}

export default AddBtn

import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [num,setNum] = useState(false)
  const [char,setChar] = useState(false)
  const [pwsd,setPwsd] = useState("")

  //ref hook
  const pwsdRef = useRef(null)


  //for optimization
  const pwsdGen = useCallback(()=>{
    let pwsd = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num) str +='0123456789'
    if (char) str +='!@#$%^&*()_+{}:"?~'

    for (let i = 1; i <= length;i++){
      let random = Math.floor(Math.random() * str.length + 1)
      pwsd += str[random]
    }
    setPwsd(pwsd)

  },[length,num,char,setPwsd])
  
  useEffect(()=>{
    pwsdGen()
  },[length,num,char,pwsdGen])

  const copyPwsd =useCallback(()=>{
    pwsdRef.current?.select()
    pwsdRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(pwsd)}
  ,[pwsd])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
           <h1 className='text-white text-center text-3xl my-3'>Password Generator</h1> 
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={pwsd} 
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder='Password' 
        ref={pwsdRef}
        readOnly />

        <button 
        onClick={copyPwsd}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          checked={num}
          onChange={(e) => setNum((prev)=>!prev)}
          />
          <label >Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          checked={char}
          onChange={() => setChar((prev)=>!prev)}
          />
          <label >Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App

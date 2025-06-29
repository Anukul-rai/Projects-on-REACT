import { useState } from 'react'

function App() {
  const [color,setColor] =useState("purple")
  
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className='flex fixed flex-wrap justify-center bottom-2 px-2 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded'>
          <button 
          onClick={()=>setColor('red')}
          className='outline-none px-4 py-1 rounded shadow-md text-white'
          style={{backgroundColor:"red"}}>Red</button>
          <button 
          onClick={()=>setColor('green')}
          className='outline-none px-4 py-1 rounded shadow-md text-white'
          style={{backgroundColor:"green"}}>Green</button>
          <button 
          onClick={()=>setColor('blue')}
          className='outline-none px-4 py-1 rounded shadow-md text-white'
          style={{backgroundColor:"blue"}}>Blue</button>
          <button 
          onClick={()=>setColor('black')}
          className='outline-none px-4 py-1 rounded shadow-md text-white'
          style={{backgroundColor:"black"}}>Black</button>
          <button 
          onClick={()=>setColor('pink')}
          className='outline-none px-4 py-1 rounded shadow-md text-white'
          style={{backgroundColor:"pink"}}>Pink</button>
          <button 
          onClick={()=>setColor("purple")}
          className='outline-none px-4 py-1 rounded shadow-md text-white'
          style={{backgroundColor:"grey"}}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App

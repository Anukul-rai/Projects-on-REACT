import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)

    const toggleInc=()=>{
        setCount(count+1)
    }
    const toggleDec=()=>{
        setCount(count -1)
    }
    const toggleRes=()=>{
        setCount(0)
    }

    return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'100px'}}>
        <h1> Counter: {count} </h1>
         <div>
            <button onClick={toggleInc}>Increment</button>
            <button onClick={toggleDec}>Decrement</button>
            <button onClick={toggleRes}>Reset</button>
        </div>
    </div>
  )
}

export default Counter

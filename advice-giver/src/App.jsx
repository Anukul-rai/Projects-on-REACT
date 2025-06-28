import React, { useState } from 'react'
import Message from './Message'
import styled from 'styled-components'

function App() {
  const [advice,setAdvice]=useState()
  const [count,setCount]=useState(0)

async function getAdvice(){
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  setAdvice(data.slip.advice)
  setCount((prev)=>prev+1)
}

const resetAdvice=()=>{
  setCount(0)
}

  return (
    <Container>
      <div className="advice">
        <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <Message
      count={count}/>
      <button onClick={resetAdvice}>Reset </button>

      </div>
      

    </Container>
  )
}

export default App


const Container =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  
  .advice{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 29px;
    background-color: #19b7cf;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    }
    .advice h2{
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .advice button{
      padding: 10px 20px;
      background-color: #fff;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      }
      .advice button:hover{
        background-color: #9d9e9e; 
        }
      .advice button:active{
        transform: scale(1.1);
        } 
      .advice button:focus{
        outline: none;
      }
  
`
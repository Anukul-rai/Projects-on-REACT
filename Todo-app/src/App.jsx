import { useState } from "react"
import TodoTitle from "./components/TodoTitle"
import styled from "styled-components"

function App(){
const [toDO,setToDo]=useState([]);
const [inputValue,setInputValue]=useState('')

const handleClick=(e)=>{
  e.preventDefault();
  if(inputValue=="")return;
  setToDo([...toDO,inputValue])
  setInputValue('')
}

  return (
    <Container>
    <TodoTitle/>
    <div className="form">
      <form >
        <input
          type="text"
          name="todo"
          value={inputValue}
          placeholder="Add a todo..."
          onChange={(e)=>{setInputValue(e.target.value)}}/>
        <button onClick={handleClick}>Add</button>
      </form>
      <div>
        <ol>
        {toDO.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ol>
      </div>
    </div>
    </Container>
  )
}
export default App
const Container=styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    font-family: Arial, sans-serif;
  .form{
      background-color: #e3bcbc;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      width: 90%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

    form {
      width: 100%;
      display: flex;
      gap: 10px;
    }

    input {
      flex: 1;
      padding: 10px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      background-color: #f2f2f2;
    }
   button {
      padding: 10px 16px;
      font-size: 1rem;
      border: none;
      border-radius: 6px;
      background-color: #2d752f;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #45a049;
      }
    }
    ol {
      padding-left: 20px;
      }
    li {
      background-color: #f9f9f9;
      text-align: left;
      padding: 10px 14px;
      margin-bottom: 8px;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s;

      &:hover {
        transform: translateX(5px);
      }
    }
    }
    
  
`
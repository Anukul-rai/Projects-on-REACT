import Todotitle from './components/Todotitle'
import List from './components/List'
import AddBtn from './components/AddBtn'
import { useState } from 'react'
// import Counter from './components/Counter'

function App() {
  const[todo,setTodo]=useState([])


  const handleAdd=(newTodo)=>{
    setTodo([...todo,newTodo])
  }
  const handleDelete=(indexToDelete)=>{
    setTodo(todo.filter((_, i) => i !== indexToDelete));
  }
  return (
    <div className="min-h-screen flex flex-col  justify-center bg-gray-100">
      {/* <Counter/> */}
      <Todotitle/>
      <AddBtn onAdd={handleAdd}/>
      <List
      todo={todo}
      onDelete={handleDelete}
      />
    </div>
  )
}

export default App

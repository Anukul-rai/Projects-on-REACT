import Todotitle from './components/Todotitle'
import List from './components/List'
import AddBtn from './components/AddBtn'
import { useState } from 'react'
import Maintodo from './components/Maintodo'
import Counter from './components/Counter'
  import { ToastContainer, toast } from 'react-toastify';


function App() {
  
  return (
    <div className="min-h-screen bg-indigo-900 flex items-center justify-center">
      {/* <Counter/> */}
      {/* <Todotitle/> */}
      {/* <AddBtn onAdd={handleAdd}/>
      <List todo={todo} onDelete={handleDelete}/> */}
      <Maintodo/>
      <ToastContainer/>
    </div>
  )
}

export default App

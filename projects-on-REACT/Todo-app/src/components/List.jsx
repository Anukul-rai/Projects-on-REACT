import React from 'react'
import Todolist from './Todolist'

function List({todo,onDelete}) {
  return (
    <div className="flex flex-col gap-3">
        {todo.map((todo, index) => (
            <Todolist key={index} text={todo} onDelete={() => onDelete(index)} />
        ))}
    </div>
  )
}

export default List

import React from 'react'
import db from '@/utils/db'
import TodoList from '@/components/TodoList'
import { resolve } from 'path'

const getData = async () => {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000))
    const todos = db.todo.findMany({})
    return todos

}



const TodosPage = async () => {
    const todos = await getData()

  return (
    <>
    <div>
        <TodoList todos={todos}/>
    </div>
    </>
  )
}

export default TodosPage
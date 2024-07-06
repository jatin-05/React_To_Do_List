import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/todoContext'
import Form from './components/Form'
import TodoItem from './components/TodoItem'

function App() {
 
  const [todos, setTodos] = useState([])

  const addTodo = (todo )=> {
    setTodos ((prev)=> [  {id: Date.now() , ...todo} ,  ...prev  ])
  }
  const updateTodo = (id , todo) => {
    setTodos ( (prev)=> prev.map ((obj) => obj.id===id ? todo : obj))
  }

  const deleteTodo = (id) => {
    setTodos ( (prev)=> prev.filter ( (obj )=> obj.id!==id))
  }

  const toggleComplete = (id) => { 
    setTodos ( (prev)=> prev.map ((obj) => obj.id===id ? {...obj, completed: !obj.completed } : obj))
  }


  useEffect(() => {

   let abcd= JSON.parse(localStorage.getItem("todos"))
   if (todos) {
    setTodos(abcd)
  }
    
  }, [])

useEffect(() => {

  localStorage.setItem( "todos", JSON.stringify( todos))
  
}, [todos])

   

  return (
    < TodoProvider value={ {todos ,updateTodo, addTodo , deleteTodo , toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <Form/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map ((obj)=> ( 
                          
                          <div key={obj.id}
                            className='w-full'
                          > 
                          <TodoItem todo={obj} />
                          </div> 

                          ) )}
                    </div>
                </div>
            </div>
    </ TodoProvider>
  )
}

export default App



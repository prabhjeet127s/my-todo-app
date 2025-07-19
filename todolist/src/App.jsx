import { useState } from 'react'


import Navbar from './components/Navbar'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);


  const handleEdit=()=>{

  }
  const handleDelete=()=>{
    
  }
  const handleAdd=()=>{
    setTodos([...todos,{todo,iscompletes: false}])
    console.log(todos);
    
    
  }
  const handleChange=(e)=>{
    setTodo(e.target.value)
    
    
  }
 

  return (
    <>

    <Navbar/>

    <div className="container mx-auto bg-violet-100 my-5 rounded-xl p-5 min-h-[80vh]">

      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'>
          Add a Todo </h2>
          <input onChange={handleChange}  value={todo} type="text"  className='bg-white w-1/2'/>
          <button  onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 mx-2 rounded-md text-white font-bold'>Add</button>
      </div>
        
        <h2 className='text-lg font-bold' >Your Todos</h2>
        <div className="todos">


          {todos.map((item)=>{


       return   <div key={todo} className="todo flex justify-between w-1/4 my-3">
            <div className="text ">{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 mx-1 rounded-md text-white font-bold'>Edit</button>
              <button  onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 mx-1 rounded-md text-white font-bold '>Delete</button>

            </div>

          </div>
          })}
        </div>

     

    </div>
     
    </>
  )
}

export default App

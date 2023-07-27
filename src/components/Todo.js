import React from 'react'
import '../components/todo.css'
import { useState } from 'react'

const Todo = () => {
  const[task,setTask]=useState("");
  const[todoList,setTodoList]=useState([]);
  const[edit,setEdit]=useState(null)
 

  

 
  const addTodo=()=>{
    if(task.trim()!==""){
      if(edit !==null){
        const updatetask=todoList.map((item,index)=>index===edit?task:item);
        setTodoList(updatetask)
        setTask("");
        setEdit(null)

      }else{
        setTodoList([...todoList,task]);
        setTask("")
      }
    }

    
  }
  const deleteTodo=(index)=>{
    const updateList=todoList.filter((_,i)=> i!==index);
    setTodoList(updateList)
    
  }
  const EditTodo=(index)=>{
   const editTask=todoList[index];
   setTask(editTask);
   setEdit(index)
  }
  

  return (
    <div className='todo-container'>
      <h2>Add Your TodoList</h2>
      <input type='text' placeholder='Add Your Todos'
      onChange={(e)=> setTask(e.target.value)}
      value={task}
      />
      <button onClick={addTodo}>Add todo</button>
      
    <ul>
      {todoList.map((item,index)=>(<li key={index}>{item}
        <button onClick={()=>deleteTodo(index)}>Delete</button>
        <button onClick={()=>EditTodo(index)}>Edit</button>

        </li>))}
      
    </ul>
      
    </div>
  )
}

export default Todo

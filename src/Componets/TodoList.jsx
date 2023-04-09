import React, { useContext } from 'react'
import { myContext } from '../ContextProvider/Context';
import '../CSS_Files/list.css';

 const TodoList=() =>{
   const{todoList,setTodoList}=useContext(myContext);
   function deletHandler(id){
     const delet=todoList.filter((e)=>{
    return e.id !==id
     })
     setTodoList(delet)
   }

  return (
    <>
    <div className='outbox'>
       {todoList.map((e)=>{
    //    console.log(e)
    return <>
    <div className='result'>
        <input type="checkbox" name="" id="check" />
        <h2>{e.currentValue}</h2>
        <button>Edit</button>
        <button onClick={()=>{
            deletHandler(e.id)
        }}>Delete</button>
        </div>
    </>
       })}   
    </div>
    </>
  )
};

export default TodoList;
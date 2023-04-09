import React, { useContext } from 'react'
import { myContext } from '../ContextProvider/Context';
import '../CSS_Files/input.css';
const Input = () => {
    const{todoList,setTodoList,currentValue,setCurrentValue}=useContext(myContext);
  return (
    <div className='Input'>
        <input type='text' onChange={(e)=>{
         setCurrentValue(e.target.value)
        }}/>
        <button onClick={()=>{
            setTodoList([...todoList,{currentValue:currentValue,id:Date.now()}])
        }}>Click Here</button>
    </div>
  );
};

export default Input;
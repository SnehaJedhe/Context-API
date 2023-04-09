import { createContext,useContext, useState } from "react";

       export const myContext=createContext();
        
        // const initialTodoListState=["Hello"];
        
        const Context=({children})=> {
              const[todoList,setTodoList]=useState([]);
              const[currentValue,setCurrentValue]=useState("");
            
          return(
                <>
                <myContext.Provider value={{todoList,setTodoList,currentValue,setCurrentValue}}>{children}</myContext.Provider>
                </>
          )      
        };
        // export const useTodoContext=()=> useContext(myContext);

export default Context; 
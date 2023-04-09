
import React from 'react';
import './App.css';
import Input from './Componets/Input';
import TodoList from './Componets/TodoList';
import Header from './Componets/Header';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Input/>
      <TodoList/>
    </div>
  );
};

export default App;

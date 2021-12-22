import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './component/Form';
import TodoList from './component/TodoList';

function App() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalStorage()
  }, [todoList, status])

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todoList.filter(todo => todo.completed === true))
        break;

      case "uncompleted":
        setFilteredTodos(todoList.filter(todo => todo.completed === false))
        break;

      default:
        setFilteredTodos(todoList)
        break;
    }
  }

  // Local Storage
  const saveLocalStorage = () => {
      localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  const getLocalStorage = () => {
    if (localStorage.getItem('todoList') === null) {
      localStorage.setItem('todoList', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todoList'))
      setTodoList(todoLocal);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Aria's Todo List</h2>
      </header>
      <Form inputText={userInput}
            setInputUser={setUserInput}
            todos={todoList}
            setTodos={setTodoList}
            setStatus={setStatus}/>
      <TodoList todos={todoList}
                setTodos={setTodoList} 
                filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;

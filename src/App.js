import './App.css';
import React, { useState } from "react"
import { fetchPostUser } from './apis/userApi';
import { fetchGetAllTodosByUserId, fetchPostNewTodo } from './apis/todoApi';
import TodoItem from './components/TodoItem';
function App() {
  const [email, setEmail] = useState("")
  const [userId, setUserId] = useState("");
  const [todoContent, setTodoContent] = useState("")
  const [todos, setTodos] = useState([]);

  const onSubmitEmail = (e) => {
    e.preventDefault();
    fetchPostUser(email)
      .then((returnData) => {
        console.log(returnData)
        if (returnData.type === "DUPLICATED") {
          //fetch
          setUserId(returnData.user_id)
          fetchGetAllTodosByUserId(returnData.user_id)
            .then((todos) => {
              setTodos(todos);
            })
        } else {
          setUserId(returnData.user_id)
          setEmail(returnData.email)
        }
      });
  }
  const onSubmitTodo = (e) => {
    e.preventDefault();
    fetchPostNewTodo(userId, todoContent).then((res) => {
      console.log(res.todo)
      setTodos([...todos, res.todo])
    })

  }

  return (
    <div className="App">
      <header>
        <h1>Cloudtype Demo Todo List</h1>
      </header>
      {!userId ? <form onSubmit={onSubmitEmail}>
        <input type="text" placeholder='email' onChange={(e) => { setEmail(e.target.value) }} />
        <input type="submit" value="submit" />
      </form> : <h2>Todo List for {email}</h2>}

      {!userId ? null :
        <form onSubmit={onSubmitTodo}>
          <input type="text" onChange={(e) => { setTodoContent(e.target.value) }} />
          <input type="submit" value="Create Todo" />
        </form>}

      <div>
        <ul>{
          todos.map((todo) => {
            return <TodoItem key={todo.todo_id} content={todo.content} />
          })}</ul>
      </div>

    </div>
  );
}

export default App;

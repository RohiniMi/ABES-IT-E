import { useState } from "react"
import InputToDo from "./InputToDo"
function App() {
  const [todoList, setTodolist] = useState([]);

  const inputHandler = (value) => {
    setTodolist([...todoList, value])
  }
  const deleteHandler = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodolist([...newList]);
  }
  const updateHandler = (index) => {

  }
  return (
    <div className="todo-list">
      <h2>TODO LIST</h2>
      {todoList.map((data, index) =>
        <li key={index}>
          {data}
          <button onClick={() => updateHandler(index)}>UPDATE</button>
          <button onClick={() => deleteHandler(index)}>DELETE</button>
        </li>
      )}
      <InputToDo inputHandler={inputHandler} />
    </div>
  )
}

export default App

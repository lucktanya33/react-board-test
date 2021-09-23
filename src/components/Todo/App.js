import './App.css';
import styled from 'styled-components'
import TodoItem from './TodoItem'
import { useState, useRef} from 'react'

//let id = 2 // 用來存每一個todo的id會一直增加
function App() {
  // useState說明，第一個參數todos是state初始值，第二個是怎麼set這個值的function
  const [todos, setTodos]= useState([
    {id: 1, content: 'abc', isDone: true},
    {id: 2, content: 'not done', isDone: false}
  ]) // 這是一個hooks

  const [value, setValue] = useState('')
  const id = useRef(3)

  const handleButtonClick = () => {
    setTodos([
      {
      id: id.current,
      content: value
      }, ...todos]
    )
    setValue('')
    id.current++
  }
  // 功能-新增
  const handleInputChange = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
  }
  // 功能-刪除
  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))// todo裡面的id不等於我要的id就留下來不然就刪掉
  }
  // 功能-標誌已完成
  const handleToggleIsDone = id => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }))
  }
  return (
    <div className="App">
      <input type="text" placeholder="請輸入代辦事項" value={value} onChange={handleInputChange}/>
      <button onClick={handleButtonClick}>Add Todo</button>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleIsDone={handleToggleIsDone}/>)}
    </div>
  );
}

export default App;

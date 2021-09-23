import './App.css';
import styled from 'styled-components'
import {MEDIA_QUERY_MID, MEDIA_QUERY_LARGE} from './constants/style'

// 樣式
const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 8px 16px;
  border 1px solid black;
`
const TodoContent = styled.div`
  color: ${props => props.theme.colors.red_300};
  font-size: 12px;

  ${props => props.size === 'XL' && `
    font-size: 20px;
  `}

  ${props => props.$isDone && `
  text-decoration: line-through;
`}
`
const TodoButtonWrapper = styled.div`
`
const Button = styled.button`
  padding: 4px;
  color: black;
  font-size: 20px;

  ${MEDIA_QUERY_MID} {
    font-size: 15px;
  }

  ${MEDIA_QUERY_LARGE} {
    font-size: 12px;
  }

  &:hover {
    color: red
  }

  & + & {
    margin-left: 4px;
  }
`
// 樣式-button restyle
const RedButton = styled(Button)`
  color: red;
`

// export component-TodoItem
export default function TodoItem ({ className, size, todo, handleDeleteTodo, handleToggleIsDone }) {
  const handleTogglerClick = () => {
    handleToggleIsDone(todo.id)
  }
  return (
    <TodoItemWrapper className={className} data-todo-id={todo.id}>
      <TodoContent $isDone={todo.isDone} size={size}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <Button onClick={handleTogglerClick}>
          {todo.isDone ? '已完成' : '未完成'}
        </Button>
        <RedButton onClick={() => {
          handleDeleteTodo(todo.id)
        }}>刪除</RedButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  )
}

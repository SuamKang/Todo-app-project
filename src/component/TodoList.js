import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";



const TodoListBox = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto; // todo항목 길어지면 스크롤되게
`;

// todo목록들
const TodoList = ({ todos, onRemove, onToggle}) => {
  return (
    <TodoListBox>
      {todos.map((todo) => <TodoItem  key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/> )}
    </TodoListBox>
  );
};

export default TodoList;

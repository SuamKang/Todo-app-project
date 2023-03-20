import React from "react";
import TodoItem from "./TodoItem";

// todo목록들
const TodoList = ({ todos, setTodos }) => {

  // list클릭시 글씨 연하게 작용하는 이벤트
  const handleOnClick = (id) => {
    setTodos(
      todos.map((item) => {
        return item.id === id ? { ...item, checked: !item.checked } : item;
      })
    );
  };

  return (
    <div>
        {todos.map((todo) => {
            return todo.checked ? (
              <TodoItem
                style={{ color: "lightGray", listStyle : "none"}}
                onClick={() => handleOnClick(todo.id)}
              >
                <input type="checkbox"/>
                {todo.title}
                <span>수정</span>
                <span>X</span>
              </TodoItem>
            ) : (
              <TodoItem
                style={{ color: "#000", listStyle: "none"}}
                onClick={() => handleOnClick(todo.id)}
              >
                <input type="checkbox"/>
                {todo.title}
                <span>수정</span>
                <span>X</span>
              </TodoItem>
            );
          })}
    </div>
  );
};

export default TodoList;

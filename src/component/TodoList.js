import React from "react";
import TodoItem from "./TodoItem";

// todo목록들
const TodoList = ({ todos, setTodos }) => {
  // todo들값 현재 상태
  // todo가 있는지 여부상태

  return (
    <div>
        <div>
            <h1>Todo List</h1>
        </div>
      <div>
        {todos.map((todo) => {
          <TodoItem todo={todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;

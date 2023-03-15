import React, {useState} from "react";
import styled from "styled-components";


// 투두 인풋창
const TodoInsert = ({todos, setTodos, inputTodo, setInputTodo }) => {


    // 할일 추가버튼 클릭 이벤트
    const handleInputClick = () => {
      // 새로 추가할 todo
      const newTodo = {
        id: todos.length + 1,
        title: inputTodo,
        checked: false,
      };
      setTodos([...todos, newTodo]);
    };

    return(
        <>
          <div className="todo-insert">
          <form action="#" name="todo_insert">
            <input
              type="text"
              placeholder="여기에 할일을 입력하세요"
              value={inputTodo}
              autoFocus
              onChange={(e)=>{
                e.preventDefault();
                const { value } = e.target;
                setInputTodo(value);
              }}
            />
          </form>
          <button onClick={handleInputClick}>추가</button>
        </div>
        </>
    );
};

export default TodoInsert;
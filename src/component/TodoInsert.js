import React, {useState} from "react";
import styled from "styled-components";


// 투두 인풋창
const TodoInsert = ({inputTodo}) => {
    return(
        <>
          <div className="todo-insert">
          <form action="#" name="todo_insert">
            <input
              type="text"
              placeholder="여기에 할일을 입력하세요"
              defaultValue={inputTodo}
              autoFocus
              onChange={handleInputOnChange}
            />
          </form>
          <button onClick={handleInputClick}>추가</button>
        </div>
        </>
    );
};

export default TodoInsert;
import React, { createContext, useReducer, useContext, useRef } from "react";

// 초기 상태
const initialTodos = [
  {
    id: 1,
    text: "운동하기",
    done: false,
  },
  {
    id: 2,
    text: "빨래하기",
    done: false,
  },
  {
    id: 3,
    text: "리엑트 공부하기",
    done: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type : ${action.tpye}`);
  }
};

// context API

// for state
const TodoStateContext = createContext();

// for dispatch
const TodoDispatchContext = createContext();

// for nextId
const TodoNextIdContext = createContext();

// Provider 작성(전역)
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(4); // 새로 생성될 id값은 렌더링되지 않는 값

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
            {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

// custom hook 1 (state를 담은 contextAPI를 사용)
export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    // 예외처리
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

// custom hook 2 (dipatch를 담은 contextAPI를 사용)
export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    // 예외처리
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

// custom hook 3 (nextId를 담은 contextAPI를 사용)
export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    // 예외처리
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

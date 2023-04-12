/* eslint-disable */ // 해당파일은 eslint적용안한다는 주석설정
// action types
export const READ = "READ";
export const CREATE = "CREATE";
export const REMOVE = "REMOVE";
export const TOGGLE = "TOGGLE";
export const MODIFY = "MODIFY";

// action creators
export const readTodo = (todos) => {
  return {
    type : 'READ',
    payload : {
      todos,
    }
  }
}


export const createTodo = (todo) => {
  console.log(todo)
  return {
    type: 'CREATE',
    payload: {
      id: todo.id,
      text: todo.text,
      done: todo.done
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE',
    payload: {
      id,
    },
  };
};

export const toggleTodo = (id, done) => {
  return {
    type: 'TOGGLE',
    payload: {
      id,
      done,
    },
  };
};

export const modifyTodo = (id, text) => {
  return {
    type: 'MODIFY',
    payload: {
      id,
      text,
    },
  };
};

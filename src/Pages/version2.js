import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";


// 현재 json-server로 데이터를 불러올때마다 리렌더링이 되어버린다.
// 그부분을 방지하기 위해선 useEffect 훅을 사용하여 내가 변경하고자 하는 상태값이 변경할때만 함수(handleOnSubmit)가 실행되게 해줘야 한다.

const TodoList = () => {
  const [todoListDataArr, setTodoListDataArr] = useState([]);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    handleOnSubmit();
  }, [isMounted]); // useEffect 상태사이클 필수적으로 이해 - 찾아서 공부하기


  // 조회요청
  const handleOnSubmit = useCallback( async () => {
    
    const response = await axios('http://localhost:3001/todos/', 
    { headers: {"Content-Type" : "application/json",
    Accept: "application/json"} });

    setTodoListDataArr(response.data);
  },[])

  // 토글수정요청
  const handleOnToggle = (id, done) => async (e) => {
    e.preventDefault();
    
    let patchData = { "done" : !done };
    
    const res = await axios.patch(`http://localhost:3001/todos/${id}`, patchData);

    setIsMounted(!isMounted);
  }

    return (
        <div>
         { todoListDataArr ? todoListDataArr.map((item) => {
            return (
                <div key={item.id}>
                  <button onClick={handleOnToggle(item.id, item.done)}>눌러봐</button>
                  <div key={item.id}>{item.text}</div>
                  <div>{item.done ? '던입니당' : '아닙니다'}</div>
                </div>
            )
         }) : null  }
        </div>
    )
}

export default TodoList;
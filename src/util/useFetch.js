import { useEffect, useState } from 'react';

// 서버 요청 데이터 조회 하는 custom hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data); // 받아오는값
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 100);
  }, [url]);

  return [data, isPending, error];
};

export default useFetch;

// 조회 요청 (내가 작성한 axios로 조회요청하기 피드백필요)
// const getAllTodos = async () => {
//     try{
//         setError(null); // 초기화
//         setData(null); // 초기화
//         const response = await axios.get(url)
//         if(!response.ok){
//             throw new Error('Could not fetch the data for that resource')
//         }
//         setData(response.data);
//     } catch(err) {
//         setError(err.message)
//     }
//     setIsPending(false) // 로딩 해제
// }

// // 해당 url 마운트 될때 정보 불러오기
// useEffect(()=> {
//     getAllTodos();
// },[url])

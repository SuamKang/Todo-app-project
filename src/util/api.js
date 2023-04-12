
// 요청한 데이터 받아와서 뿌려줄 주소
const TODO_URL = 'http://localhost:3000/todo/';


export const fetchCreate = (url, data) => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        window.location.href = TODO_URL;
    })
    .catch((error) => {
        console.error('Error', error);
    })
}

export const fetchDelete = (url, id) => {
    fetch(`${url}${id}`, {
        method: "DELETE",
    })
    .then(() => {
        window.location.href = TODO_URL;
    })
    .catch((error) => {
        console.error('Error', error);
    })
}

export const fetchPatch = (url, id, data) => {
    fetch(`${url}${id}`, {
        method : "PATCH",
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        window.location.href = TODO_URL;
        // return data;
    })
    .catch((error) => {
        console.error('Error', error);
    })
}
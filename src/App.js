import React from "react";
import { Routes,Route } from "react-router-dom";
import Sidebar from './Sidebar'
import Todo from "./Pages/Todo";
import Yesterday from "./Pages/Yesterday";
import Quotes from "./Pages/Quotes";
import { createGlobalStyle } from "styled-components";


// 전역스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F9F5EB;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Todo/>}></Route>
        <Route path="/Yesterday" element={<Yesterday/>}></Route>
        <Route path="/quote" element={<Quotes />}></Route>
       </Routes> 
      <Sidebar />
    </>
  );
}

export default App;

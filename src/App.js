import React from "react";
import { Routes,Route } from "react-router-dom";
import Header from './component/Header'
import Todo from "./Pages/Todo";
import Weather from "./Pages/Weather";
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
    <div>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Todo/>}></Route>
        <Route path="/weather" element={<Weather/>}></Route>
        <Route path="/quotes" element={<Quotes />}></Route>
      </Routes> 
    </div>
  );
}

export default App;

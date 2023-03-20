import React from "react";
// import "./App.css";
import { Routes,Route } from "react-router-dom";
import Nav from "./component/Nav";
import Sidebar from './Sidebar'
import Todo from "./Pages/Todo";
import Yesterday from "./Pages/Yesterday";
import Quotes from "./Pages/Quotes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo/>}></Route>
        <Route path="/Yesterday" element={<Yesterday/>}></Route>
        <Route path="/quote" element={<Quotes />}></Route>
       </Routes> 
      <Sidebar />
  </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './Pages/Home';
import Todo from './Pages/Todo';
import Weather from './Pages/Weather';
import Quotes from './Pages/Quotes';
import { createGlobalStyle } from 'styled-components';

// 전역스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F9F5EB;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/todo"
          element={
            <>
              <Header />
              <Todo />
              {/* <version2 /> */}
            </>
          }
        ></Route>
        <Route
          path="/weather"
          element={
            <>
              <Header />
              <Weather />
            </>
          }
        ></Route>
        <Route
          path="/quotes"
          element={
            <>
              <Header />
              <Quotes />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

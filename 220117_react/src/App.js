import logo from './logo.svg';
import './App.css';
import UseEffectFatch from './components/UseEffectFatch';
import InlineCss from './components/InlineCss';
import TestCss from './components/TestCss';
import TestStyled from './components/TestStyled';
import Ex1 from './components/Ex1';
import FancyBorder from './components/FancyBorder';
import Profile from './components/Profile';
import Board from './components/Board';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import NonFound from './components/NonFound';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/board/:boardID" element={<BoardDetail />}></Route>
        <Route path="/*" element={<NonFound />}></Route>
      </Routes>
    </div>
    //   <FancyBorder color="orange">
    //   <h1>hello,</h1>
    //   <span>이건 유용합니다.</span>
    // </FancyBorder>
  );
}

export default App;

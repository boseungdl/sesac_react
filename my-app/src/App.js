import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader';
import BtnToNaver from './components/BtnToNaver';
import ImgC from './components/ImgC';

function App() {
  const helloStr = 'Hello, first exercise'
 
  return (
    <div className="App">
      <MainHeader />
      <ImgC/>
      <BtnToNaver/>
    </div>
  );
}

export default App;

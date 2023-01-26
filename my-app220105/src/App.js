import { useState } from 'react';
import './App.css';
import ArrState from './components/ArrState';
import ClassState from './components/ClassState';
import Condition from './components/Condition';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import ObjState from './components/ObjState';
import StateAndVariable from './components/StateAndVariable';

function App() {
  let [teacher, setTeacher] = useState('이효석');

  return (
    <div className="App">
      <ObjState />
    </div>
  );
}

export default App;

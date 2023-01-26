import { useState } from 'react';
import './App.css';
import ChangeFocus from './components/ChangeFocus';
import ConditionalRender from './components/ConditionalRender';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import ExUnmount from './components/ExUnmount';
import PracticeOne from './components/PracticeOne';
import PracticeTwo from './components/PracticeTwo';
import ReactFragment from './components/ReactFragment';
import RefDom from './components/RefDom';
import ShowTimer from './components/ShowTimer';
import TestRef from './components/TestRef';
import TestuseEffect from './components/TestuseEffect';

function App() {
  const [number, setNumber] = useState(1);

  const compo =
    number == 1 ? (
      <PracticeOne number={setNumber} />
    ) : (
      <PracticeTwo number={setNumber} />
    );

  return (
    <div className="App">
      {/* {compo}
      <TestuseEffect /> */}
      {/* <ShowTimer /> */}
      <ExUnmount />
    </div>
  );
}

export default App;

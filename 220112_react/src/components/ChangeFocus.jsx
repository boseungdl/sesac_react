import React from 'react';
import { useRef } from 'react';

export default function ChangeFocus() {
  const input1 = useRef();
  const input2 = useRef();

  function changeFocusOne() {
    input1.current.focus();
  }
  function changeFocusTwo() {
    input2.current.focus();
  }

  return (
    <div>
      <input ref={input1} type="text" />
      <input ref={input2} type="text" />
      <br />
      <button onClick={changeFocusOne}>1번</button>
      <button onClick={changeFocusTwo}>2번</button>
    </div>
  );
}

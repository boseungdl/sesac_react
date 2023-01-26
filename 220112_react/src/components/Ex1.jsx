import React from 'react';
import { useRef } from 'react';

export default function Ex1() {
  const div = useRef();
  const input = useRef();

  function colorChange() {
    div.current.style.backgroundColor = input.current.value;
  }
  return (
    <div ref={div}>
      <input ref={input} type="text" />
      <button onClick={colorChange}>색깔바꾸기</button>
    </div>
  );
}

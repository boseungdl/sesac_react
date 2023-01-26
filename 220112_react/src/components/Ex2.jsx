import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function Ex2() {
  const [number, setNumber] = useState([1, 2]);
  const [xx, setXX] = useState('*');
  const input1 = useRef();
  const yy = ['*', '+', '-'];
  function a() {
    if (Number(input1.current.value) == eval(`${number[0]}${xx}${number[1]}`)) {
      alert('정답입니다.');
      const randomNumber = [
        Math.round(Math.random() * 9),
        Math.round(Math.random() * 9),
      ];
      setXX(yy[Math.round(Math.random() * yy.length)]);
      setNumber(randomNumber);
    } else {
      alert('틀렸습니다.');
    }
  }

  return (
    <div>
      <p>
        {number[0]}
        {xx}
        {number[1]}
      </p>
      <input ref={input1} type="text" />
      <button onClick={a}>정답제출!</button>
    </div>
  );
}

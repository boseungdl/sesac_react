import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function TestuseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력');
  const inputValue = useRef();

  const onButtonClick = () => {
    console.log('버튼클릭');
    setCount(count + 1);
  };

  const onInputChange = () => {
    console.log('입력');
    setText(inputValue.current.value);
  };

  console.log('렌더링 될 때마다 실행');

  useEffect(() => {
    console.log('렌더링 될 때마다 실행');
  });
  useEffect(() => {
    console.log('마운트 될때만 실행');
  }, []);
  useEffect(() => {
    console.log('버튼 클릭시에만 실행');
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={onButtonClick}>+1버튼</button>
      <br />
      <h1>{text}</h1>
      <input ref={inputValue} type="text" onChange={onInputChange} />
    </div>
  );
}

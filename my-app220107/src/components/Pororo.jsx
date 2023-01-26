import React from 'react';

export default function Pororo(props) {
  const { name, age, nickName } = props.arr;
  return (
    <div style={{ border: '1px', width: '100px', height: '100px' }}>
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      <h2>nickName: {nickName}</h2>
      <button
        onClick={() => {
          props.setArr(props.pororoObjArr[props.arr.next]);
        }}
      >
        클릭
      </button>
    </div>
  );
}

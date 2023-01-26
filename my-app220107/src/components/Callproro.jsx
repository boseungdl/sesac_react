import React, { useState } from 'react';
import Pororo from './Pororo';

export default function Callproro() {
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치',
      next: 1,
    },
    {
      name: '뽀로로1',
      age: '51',
      nickName: '사고뭉치1',
      next: 2,
    },
    {
      name: '뽀로로2',
      age: '512',
      nickName: '사고뭉치2',
      next: 0,
    },
  ];

  const [arr, setArr] = useState(pororoObjArr[0]);

  return (
    <div>
      <Pororo key="a" arr={arr} pororoObjArr={pororoObjArr} setArr={setArr} />
    </div>
  );
}

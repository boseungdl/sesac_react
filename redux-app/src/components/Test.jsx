import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const weight = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h1>당신의 몸무게는 {weight}</h1>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        살 찌기
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        살 빼기
      </button>
    </div>
  );
}

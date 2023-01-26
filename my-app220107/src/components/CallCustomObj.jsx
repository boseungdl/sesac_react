import React from 'react';
import CustomObj from './CustomObj';

export default function CallCustomObj() {
  const obj = {
    name: '하이',
    age: 20,
    nickName: 'gd',
  };
  return (
    <div>
      <CustomObj />
    </div>
  );
}

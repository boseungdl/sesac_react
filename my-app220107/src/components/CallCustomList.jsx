import React from 'react';
import CustomList from './CustomList';

export default function CallCustomList() {
  const nameArr = ['뽀로로', '루피', '초파'];
  return (
    <div>
      <CustomList arr={nameArr} />
    </div>
  );
}

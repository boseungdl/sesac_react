import React from 'react';

export default function CustomObj(props) {
  const { name, age, nickName } = props.obj;
  if (props.obj) {
    return (
      <>
        <div>{name}</div>
        <div>{age}</div>
        <div>{nickName}</div>
      </>
    );
  } else {
    return <div>데이터 없습니다.</div>;
  }
}

import React from 'react';

export default function MainHeader(props) {
  return (
    <div>
      <h1>{props.userID}님 반갑습니다</h1>
      <a href={props.href}>{props.href}</a>
    </div>
  );
}

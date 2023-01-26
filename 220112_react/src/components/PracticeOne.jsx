import React from 'react';

export default function PracticeOne(props) {
  function change() {
    props.number(2);
  }
  return (
    <div>
      <h1>1번컴포넌트</h1>
      <button onClick={change}>1버튼</button>
    </div>
  );
}

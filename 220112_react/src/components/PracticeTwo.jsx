import React from 'react';

export default function PracticeOne(props) {
  function change() {
    props.number(1);
  }
  return (
    <div>
      <h1>2번컴포넌트</h1>
      <button onClick={change}>2버튼</button>
    </div>
  );
}

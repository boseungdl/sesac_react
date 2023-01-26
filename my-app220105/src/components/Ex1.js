import React, { useState } from 'react';

function Ex1() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(--count);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Ex1;

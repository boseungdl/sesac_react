import React, { useState } from 'react';

function Ex2() {
  let [count1, setCount1] = useState(0);

  return (
    <>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <div
          onClick={() => {
            setCount1(++count1);
          }}
        >
          👍<div>{count1}</div>
        </div>
        <div>
          {count1 >= 10 ? '😂' : '😍'}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Ex2;

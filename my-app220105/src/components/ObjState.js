import React, { useState } from 'react';

export default function ObjState() {
  const [state, setState] = useState({ teacher: '이효석' });
  console.log(state);

  return (
    <div>
      {console.log(1)}
      <button
        onClick={() => {
          state.teacher = 'tetz';
          const copyState = { ...state };
          setState(copyState);
          console.log(state);
        }}
      >
        영어로!
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}

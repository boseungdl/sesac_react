import React, { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function ExUnmount() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      {display && <PracticeTimer />}
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        {display ? '숨기기' : '보이기'}
      </button>
    </div>
  );
}

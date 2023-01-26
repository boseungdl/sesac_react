import React from 'react';

export default function InlineCss() {
  const divStyle = {
    backgroundColor: 'orange',
  };

  const headingStyle = {
    backgroundColor: 'pink',
    fontWeight: '700',
  };

  const spanStyle = {
    backgroundColor: 'skyblue',
  };

  return (
    <div style={divStyle}>
      <h1 style={headingStyle}>CSS테스트 컴포넌트 입니다.</h1>
      <span style={spanStyle}>span테스트 컴포넌트 입니다.</span>
    </div>
  );
}

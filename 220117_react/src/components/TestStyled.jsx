import React from 'react';
import styled from 'styled-components';

export default function TestStyled() {
  const Mydiv = styled.div`
    background-color: orange;
  `;
  const Myheading = styled.h1`
    background-color: skyblue;
  `;
  const MySpan = styled.span`
    background-color: pink;
    font-size: 20px;
  `;

  return (
    <Mydiv>
      <Myheading>h1태그입니다.</Myheading>
      <MySpan>span태그입니다.</MySpan>
    </Mydiv>
  );
}

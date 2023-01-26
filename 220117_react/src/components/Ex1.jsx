import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function Ex1() {
  const move = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
  const RootDIv = styled.div`
    text-align: center;
  `;
  const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    @media screen and (prefers-reduced-motion: no-preference) {
      animation: ${move} 2s 1s infinite;
    }
  `;
  const MyA = styled.a`
    color: rgb(0, 0, 0);
  `;

  return (
    <RootDIv>
      <AppHeader>
        <AppLogo src="logo192.png"></AppLogo>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDIv>
  );
}

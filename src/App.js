import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background#e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>first</div>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Container from "./components/Container";
import styled from "styled-components";

const SubHeader = styled.h2`
  font-weight: bold;
  font-size: 27px;
  font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SubHeader>
        <strong>These are the react warriors 💀</strong>
      </SubHeader>
      <Container />
    </div>
  );
};

export default App;

/* eslint-disable no-unused-vars */
import React from 'react';
import styled from '@emotion/styled';
import { hot } from 'react-hot-loader';

const Container = styled.div`
  background-color: #eee;
`;

const App = () => {
  const hello = 1;
  return (
    <Container class="test">
      <h1>
        Hello, world.
        <br />
      </h1>
    </Container>
  );
};

export default hot(module)(App);

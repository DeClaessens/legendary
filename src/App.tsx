/* eslint-disable no-unused-vars */
import React from 'react';
import styled from '@emotion/styled';
import { hot } from 'react-hot-loader';
import { Button } from './components/Button';

const Container = styled.div``;

const App = () => {
  const hello = 1;
  return (
    <Container>
      <h1>
        Hello, world.
        <br />
        <Button>Click me!</Button>
      </h1>
    </Container>
  );
};

export default hot(module)(App);

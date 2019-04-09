/* eslint-disable no-unused-vars */
import React from 'react';
import styled from '@emotion/styled';
import Playground from './Playground';
import GameManager from '@/gameManager/GameManager';

const App = () => {
  const manager = new GameManager();
  manager.init();
  return <Playground manager={manager} />;
};

export default App;

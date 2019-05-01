import React from 'react';
import styled from '@emotion/styled';
import Hand from './Hand';

const PlayingAreaContainer = styled.div`
  grid-area: playingarea;
  border-left: 1px solid black;
  position: relative;
`;
const PlayingArea = props => {
  return (
    <PlayingAreaContainer>
      <h1>Playing</h1>
      <Hand />
    </PlayingAreaContainer>
  );
};

export default PlayingArea;

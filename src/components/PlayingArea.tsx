import React from 'react';
import styled from '@emotion/styled';
import Hand from './Hand';
import Deck from './Deck';
import DiscardPile from './DiscardPile';

const PlayingAreaContainer = styled.div`
  grid-area: playingarea;
  border-left: 1px solid black;
  position: relative;
`;

const PilesContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 10px;
`;
const PlayingArea = props => {
  return (
    <PlayingAreaContainer>
      <h1>Playing</h1>
      <PilesContainer>
        <Deck deckId="PLAYER_1" />
        <DiscardPile />
      </PilesContainer>
      <Hand />
    </PlayingAreaContainer>
  );
};

export default PlayingArea;

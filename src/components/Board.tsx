import React from 'react';
import styled from '@emotion/styled';
import Headquarters from './Headquarters';

const BoardContainer = styled.div`
  grid-area: board;
  display: flex;
  flex-direction: column;
`;

const VillainBoard = styled.div`
  flex: 1 1 auto;
  border-bottom: 1px solid black;
`;

const HeroBoard = styled.div`
  flex: 1 1 auto;
`;

const Board = props => {
  return (
    <BoardContainer>
      <VillainBoard>
        <h1>Villain!</h1>
      </VillainBoard>
      <HeroBoard>
        <h1>Hero!</h1>
        <Headquarters />
      </HeroBoard>
    </BoardContainer>
  );
};

export default Board;

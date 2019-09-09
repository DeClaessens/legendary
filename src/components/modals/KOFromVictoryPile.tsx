import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import playingArea from '@/reducers/playingArea';
import { ItemTypes } from '@/helpers/constants';

interface IKOFromVictoryPileModal {
  victoryPile: any[];
  onSubmit?: (result) => void;
}

const StyledDiscardPileDiv = styled.div``;
const StyledListItem = styled.li``;

const KOFromVictoryPile: React.SFC<IKOFromVictoryPileModal> = ({ victoryPile, onSubmit }) => {
  return (
    <>
      <p>KO A CARD</p>
      <StyledDiscardPileDiv>
        <h2>VictoryPile</h2>
        <ul>
          {victoryPile.map(card => (
            <StyledListItem key={card.id} onClick={() => onSubmit({ card })}>
              {card.name}
            </StyledListItem>
          ))}
        </ul>
      </StyledDiscardPileDiv>
    </>
  );
};

const mapStateToProps = state => ({
  victoryPile: state.victoryPile,
});

export default connect(mapStateToProps)(KOFromVictoryPile);

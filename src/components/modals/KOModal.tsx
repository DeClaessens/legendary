import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import playingArea from '@/reducers/playingArea';
import { ItemTypes } from '@/helpers/constants';

interface IKOModal {
  hand: any[];
  playingArea: any;
  onSubmit?: (result) => void;
}

const StyledHandDiv = styled.div``;

const StyledPlayingAreaDiv = styled.div``;

const KOModal: React.SFC<IKOModal> = ({ hand, playingArea, onSubmit }) => {
  const handleSubmit = () => {
    return onSubmit([1, 2, 3, 4]);
  };

  return (
    <>
      <p>KO A CARD</p>
      <StyledHandDiv>
        <h2>Hand</h2>
        <ul>
          {hand.map(card => (
            <li key={card.id} onClick={() => onSubmit({ card, from: ItemTypes.CARDS.FROM_HAND })}>
              {card.name}
            </li>
          ))}
        </ul>
      </StyledHandDiv>
      <StyledPlayingAreaDiv>
        <h2>Playing Area</h2>
        <ul>
          {playingArea.cards.map(card => (
            <li key={card.id} onClick={() => onSubmit({ card, from: ItemTypes.CARDS.FROM_PLAYING_AREA })}>
              {card.name}
            </li>
          ))}
        </ul>
      </StyledPlayingAreaDiv>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

const mapStateToProps = state => ({
  hand: state.hand,
  playingArea: state.playingArea,
});

export default connect(mapStateToProps)(KOModal);

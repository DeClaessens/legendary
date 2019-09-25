import React from 'react';
import { useDrop } from 'react-dnd';

import { ItemTypes } from '@/helpers/constants';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Hand from './Hand';
import Deck from './Deck';
import DiscardPile from './DiscardPile';
import Recruit from './Recruit';
import Attack from './Attack';
import { playCardFromHand, endTurn, startTurn } from '@/actions/gameManager';

interface IProps {
  playingArea: any;
  onPlayCard: (card) => void;
  onEndTurn: () => void;
}

interface IPlayingAreaContainer {
  isOver: boolean;
  ref: any;
}

const PlayingAreaContainer = styled.div<IPlayingAreaContainer>`
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

const PlayedCardsContainer = styled.div``;

const PlayingArea = ({ playingArea, onPlayCard, onEndTurn }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARDS.FROM_HAND,
    drop: (item, monitor) => {
      onPlayCard(item.card);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <PlayingAreaContainer ref={drop} isOver={isOver}>
      <h1>Playing Area</h1>
      <PilesContainer>
        <Attack />
        <Recruit />
        <Deck deckId="PLAYER_1" />
        <DiscardPile />
        <button type="button" onClick={onEndTurn}>
          End Turn
        </button>
      </PilesContainer>
      <PlayedCardsContainer>
        {playingArea.cards.map(c => (
          <div key={c.id}>{c.name}</div>
        ))}
      </PlayedCardsContainer>
    </PlayingAreaContainer>
  );
};

const mapStateToProps = state => ({
  playingArea: state.playingArea,
});

const mapDispatchToProps = dispatch => ({
  onPlayCard: card => {
    dispatch(playCardFromHand(card));
  },
  onEndTurn: () => {
    dispatch(endTurn());
    dispatch(startTurn());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayingArea);

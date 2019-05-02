import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Hand from './Hand';
import Deck from './Deck';
import DiscardPile from './DiscardPile';
import Recruit from './Recruit';
import Attack from './Attack';

interface IProps {
  playingArea: any;
}

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

const PlayedCardsContainer = styled.div``;

const PlayingArea = ({ playingArea }) => {
  return (
    <PlayingAreaContainer>
      <h1>Playing Area</h1>
      <PilesContainer>
        <Attack />
        <Recruit />
        <Deck deckId="PLAYER_1" />
        <DiscardPile />
      </PilesContainer>
      <PlayedCardsContainer>
        {playingArea.cards.map(c => (
          <div key={c.id}>{c.name}</div>
        ))}
      </PlayedCardsContainer>
      <Hand />
    </PlayingAreaContainer>
  );
};

const mapStateToProps = state => ({
  playingArea: state.playingArea,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayingArea);

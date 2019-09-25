import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Card from './Card';
import { playCardFromHand } from '@/actions/gameManager';
import { ItemTypes } from '@/helpers/constants';

interface Hand {
  hand: any[];
  playCardFromHand: (card) => void;
}

const HandContainer = styled.div`
  border-top: 1px solid black;
  bottom: 0;
  height: 100px;
  width: 100%;
`;

const CardWrapper = styled.div`
  display: inline-block;
  margin: 5px;
`;

const PlayButton = styled.div`
  background-color: #eee;
  text-align: center;
  border: 1px solid black;
`;

const Hand = ({ hand, onPlayCard }) => {
  return (
    <HandContainer>
      <h1>Hand</h1>
      {hand.map(card => (
        <Card key={card.id} location={ItemTypes.LOCATIONS.HAND} onInteract={() => onPlayCard(card)} card={card} />
      ))}
    </HandContainer>
  );
};

const mapStateToProps = state => ({
  hand: state.hand,
});

const mapDispatchToProps = dispatch => ({
  onPlayCard: card => {
    dispatch(playCardFromHand(card));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hand);

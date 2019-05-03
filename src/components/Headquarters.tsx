import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Card from './Card';
import { playCardFromHand, buyCardFromHeadquarters } from '@/actions/gameManager';

interface Hand {
  hand: any[];
  onBuyCard: (card) => void;
}

const HeadQuartersContainer = styled.div``;

const Headquarters = ({ headquarters, onBuyCard }) => {
  return (
    <HeadQuartersContainer>
      {headquarters.map(card => (
        <Card key={card.id} card={card} onInteract={() => onBuyCard(card)} />
      ))}
    </HeadQuartersContainer>
  );
};

const mapStateToProps = state => ({
  headquarters: state.headquarters,
});

const mapDispatchToProps = dispatch => ({
  onBuyCard: card => {
    dispatch(buyCardFromHeadquarters(card));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Headquarters);

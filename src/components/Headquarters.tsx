import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Card from './Card';
import { playCardFromHand, buyCardFromHeadquarters } from '@/actions/gameManager';

interface Hand {
  hand: any[];
  recruit: number;
  onBuyCard: (card) => void;
}

const HeadQuartersContainer = styled.div``;

const Headquarters = ({ headquarters, recruit, onBuyCard }) => {
  const buyCard = card => {
    if (recruit >= card.cost) {
      onBuyCard(card);
    }
  };
  return (
    <HeadQuartersContainer>
      {headquarters.map(card => (
        <Card key={card.id} card={card} onInteract={() => buyCard(card)} />
      ))}
    </HeadQuartersContainer>
  );
};

const mapStateToProps = state => ({
  headquarters: state.headquarters,
  recruit: state.recruit,
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

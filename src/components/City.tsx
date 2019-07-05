import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Card from './Card';
import { playCardFromHand, buyCardFromHeadquarters } from '@/actions/gameManager';

interface ICity {
  hand: any[];
  fight: number;
  onBuyCard: (card) => void;
}

const CityContainer = styled.div``;

const City = ({ city, fight, onBuyCard }) => {
  const buyCard = card => {
    if (fight >= card.cost) {
      onBuyCard(card);
    }
  };
  return (
    <CityContainer>
      {city.map(card => (
        <Card key={card.id} card={card} onInteract={() => buyCard(card)} />
      ))}
    </CityContainer>
  );
};

const mapStateToProps = state => ({
  city: state.city,
  fight: state.fight,
});

const mapDispatchToProps = dispatch => ({
  onBuyCard: card => {
    dispatch(buyCardFromHeadquarters(card));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(City);

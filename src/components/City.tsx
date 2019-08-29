import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Card from './Card';
import { fightCardFromCity } from '@/actions/gameManager';
import { ItemTypes } from '@/helpers/constants';

interface ICity {
  hand: any[];
  attack: number;
  onFightCard: (card, currency) => void;
}

const CityContainer = styled.div``;

const City = ({ city, attack, onFightCard }) => {
  const fightCard = card => {
    if (attack >= card.strength) {
      onFightCard(card, { spentAttack: card.strength, spentRecruit: 0 });
    }
  };
  return (
    <CityContainer>
      {city.map(card => (
        <Card key={card.id} card={card} location={ItemTypes.LOCATIONS.CITY} onInteract={() => fightCard(card)} />
      ))}
    </CityContainer>
  );
};

const mapStateToProps = state => ({
  city: state.city,
  attack: state.attack,
});

const mapDispatchToProps = dispatch => ({
  onFightCard: (card, currency) => {
    dispatch(fightCardFromCity(card, currency));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(City);

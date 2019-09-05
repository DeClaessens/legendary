import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Card from './Card';
import { fightCardFromCity } from '@/actions/gameManager';
import { ItemTypes } from '@/helpers/constants';
import CostModal from './modals/CostModal';
import dialogService from '@/helpers/dialog';

interface ICity {
  hand: any[];
  recruit: number;
  attack: number;
  canSpendRecruitAsAttack: boolean;
  onFightCard: (card, currency) => void;
}

const CityContainer = styled.div``;

const City = ({ city, recruit, attack, canSpendRecruitAsAttack, onFightCard }) => {
  const handleFightCard = (card, spentRecruit, spentAttack = 0) => {
    onFightCard(card, { spentAttack, spentRecruit });
  };

  const beforeFightingCard = card => {
    const totalCurrency = attack + recruit;
    if (canSpendRecruitAsAttack && totalCurrency >= card.strength) {
      const Modal = <CostModal show totalRecruit={recruit} totalAttack={attack} totalCost={card.strength} />;
      return dialogService
        .open(Modal)
        .waitForClose()
        .then(result => {
          handleFightCard(card, result.spentRecruit, result.spentAttack);
        })
        .catch(() => console.log('cancelled or closed'));
    }

    if (attack >= card.strength) return handleFightCard(card, card.strength);
  };

  const fightCard = card => {
    if (attack >= card.strength) {
      onFightCard(card, { spentAttack: card.strength, spentRecruit: 0 });
    }
  };
  return (
    <CityContainer>
      {city.map(card => (
        <Card
          key={card.id}
          card={card}
          location={ItemTypes.LOCATIONS.CITY}
          onInteract={() => beforeFightingCard(card)}
        />
      ))}
    </CityContainer>
  );
};

const mapStateToProps = state => ({
  city: state.city,
  recruit: state.recruit,
  attack: state.attack,
  canSpendRecruitAsAttack: state.turnModifiers.spendRecruitAsAttack,
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

import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Card from './Card';
import { playCardFromHand, buyCardFromHeadquarters } from '@/actions/gameManager';
import { ItemTypes } from '@/helpers/constants';
import CostModal from './modals/CostModal';
import dialogService from '@/helpers/dialog';

interface Hand {
  hand: any[];
  recruit: number;
  attack: number;
  canSpendAttackAsRecruit: boolean;
  onBuyCard: (card) => void;
}

const HeadQuartersContainer = styled.div``;

const Headquarters = ({ headquarters, recruit, attack, canSpendAttackAsRecruit, onBuyCard }) => {
  const handleBuyCard = (card, spentRecruit, spentAttack = 0) => {
    onBuyCard(card, { spentAttack, spentRecruit });
  };

  const beforeBuyingCard = card => {
    if (canSpendAttackAsRecruit) {
      const Modal = <CostModal show totalRecruit={recruit} totalAttack={attack} totalCost={card.cost} />;
      return dialogService
        .open(Modal)
        .waitForClose()
        .then(result => {
          handleBuyCard(card, result.spentRecruit, result.spentAttack);
        })
        .catch(() => console.log('cancelled or closed'));
    }

    if (recruit < card.cost) return false;

    return handleBuyCard(card, card.cost);
  };

  return (
    <HeadQuartersContainer>
      {headquarters.map(card => (
        <Card
          key={card.id}
          location={ItemTypes.LOCATIONS.HEADQUARTERS}
          card={card}
          onInteract={() => beforeBuyingCard(card)}
        />
      ))}
    </HeadQuartersContainer>
  );
};

const mapStateToProps = state => ({
  headquarters: state.headquarters,
  recruit: state.recruit,
  attack: state.attack,
  canSpendAttackAsRecruit: state.turnModifiers.spendAttackAsRecruit,
});

const mapDispatchToProps = dispatch => ({
  onBuyCard: (card, currency) => {
    dispatch(buyCardFromHeadquarters(card, currency));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Headquarters);

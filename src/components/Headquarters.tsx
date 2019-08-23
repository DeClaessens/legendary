import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Card from './Card';
import { playCardFromHand, buyCardFromHeadquarters } from '@/actions/gameManager';
import { ItemTypes } from '@/helpers/constants';
import CostModal from './modals/CostModal';

interface Hand {
  hand: any[];
  recruit: number;
  attack: number;
  canSpendAttackAsRecruit: boolean;
  onBuyCard: (card) => void;
}

const HeadQuartersContainer = styled.div``;

const Headquarters = ({ headquarters, recruit, attack, canSpendAttackAsRecruit, onBuyCard }) => {
  const [showModal, setShowModal] = useState(false);
  const [cardToBuy, setCardToBuy] = useState(null);

  const handleBuyCard = (card, spentRecruit, spentAttack = 0) => {
    onBuyCard(card);
  };

  const beforeBuyingCard = card => {
    setCardToBuy(card);
    if (canSpendAttackAsRecruit) {
      return setShowModal(true);
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
      {cardToBuy && showModal && (
        <CostModal
          show={showModal}
          totalRecruit={recruit}
          totalAttack={attack}
          totalCost={cardToBuy.cost}
          onSubmit={handleBuyCard}
          onCancel={() => setShowModal(false)}
        />
      )}
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
  onBuyCard: card => {
    dispatch(buyCardFromHeadquarters(card));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Headquarters);

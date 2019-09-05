import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Card from './Card';
import { fightCardFromCity, fightMastermind } from '@/actions/gameManager';
import { ItemTypes } from '@/helpers/constants';

interface ICity {
  mastermind: any[];
  attack: number;
  onFightMastermind: (tactic, currency) => void;
}

const MastermindContainer = styled.div``;

const Mastermind = ({ mastermind, attack, onFightMastermind }) => {
  const handleFightMastermind = () => {
    if (attack >= mastermind.card.strength) {
      onFightMastermind(mastermind.tactics.pop(), { spentAttack: mastermind.card.strength, spentRecruit: 0 });
    }
  };

  return (
    <MastermindContainer>
      {mastermind && mastermind.card && (
        <Card
          key={mastermind.card.id}
          card={mastermind.card}
          location={ItemTypes.LOCATIONS.MASTERMIND}
          onInteract={handleFightMastermind}
        />
      )}
    </MastermindContainer>
  );
};

const mapStateToProps = state => ({
  mastermind: state.mastermind,
  attack: state.attack,
});

const mapDispatchToProps = dispatch => ({
  onFightMastermind: (tactic, currency) => {
    dispatch(fightMastermind(tactic, currency));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mastermind);

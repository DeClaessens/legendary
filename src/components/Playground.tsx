import React, { Fragment, Component, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import ShieldAgent from '@/cards/general/ShieldAgent';
import ShieldOperative from '@/cards/general/ShieldOperative';
import styled from '@emotion/styled';
import Card from './Card';
import { initialise, createAndFillDeck } from '@/actions/gameManager';
import PlayingArea from './PlayingArea';
import Board from './Board';
import StackService from '@/services/stackService';
import EndlessInventionIronMan from '@/cards/core/ironMan/EndlessInventionIronMan';
import { coreIronManCollection } from '@/cards/core/ironMan';
import { starterDeck } from '@/cards/general';
import Hand from './Hand';
import { coreThorCollection } from '@/cards/core/thor';
import Sentinel from '@/cards/core/villains/henchmen/Sentinel';
import DialogComponent from './DialogContainer';
import DialogContainer from './DialogContainer';
import Loki from '@/cards/core/masterminds/Loki/Loki';
import { coreLokiTacticsCollection } from '@/cards/core/masterminds/Loki/tactics';
import { createMastermind } from '@/actions/mastermind';
import MasterStrikeCard from '@/cards/MasterStrikeCard';

interface IProps {
  hand: any[];
  deck: any[];
  onInitializeGame: () => void;
  onCreateAndFillDeck: (id, cards) => void;
  onCreateMastermind: (mastermind, tactics) => void;
  onPlayCard: (card) => void;
}

const PlaygroundContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 600px;
  grid-template-rows: 1fr 300px;
  grid-template-areas:
    'board playingarea'
    'hand  hand';
  height: 100vh;
`;

export const Playground: React.SFC<IProps> = (props): ReactElement<any> | null => {
  useEffect(() => {
    const { onInitializeGame, onCreateAndFillDeck, onCreateMastermind } = props;

    onCreateAndFillDeck('PLAYER_1', [...starterDeck()]);
    onCreateAndFillDeck('VILLAIN', [
      new Sentinel(),
      new Sentinel(),
      new Sentinel(),
      new Sentinel(),
      new Sentinel(),
      new Sentinel(),
    ]);
    onCreateAndFillDeck('HQ', [...coreIronManCollection(), ...coreThorCollection()]);
    onCreateMastermind(new Loki(), [...coreLokiTacticsCollection()]);

    onInitializeGame();
  });

  return (
    <>
      <DialogContainer />
      <PlaygroundContainer>
        <Board />
        <PlayingArea />
        <Hand />
      </PlaygroundContainer>
    </>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  onCreateAndFillDeck: (id, cards) => {
    dispatch(createAndFillDeck(id, cards));
  },
  onInitializeGame: () => {
    dispatch(initialise());
  },
  onCreateMastermind: (mastermind, tactics) => {
    dispatch(createMastermind(mastermind, tactics));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playground);

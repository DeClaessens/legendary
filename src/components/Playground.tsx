import React, { Fragment, Component } from 'react';
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

interface IProps {
  hand: any[];
  deck: any[];
  onInitializeGame: () => void;
  onCreateAndFillDeck: (id, cards) => void;
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

class Playground extends Component<IProps> {
  componentDidMount() {
    const { onInitializeGame, onCreateAndFillDeck } = this.props;

    onCreateAndFillDeck('PLAYER_1', [...starterDeck()]);
    onCreateAndFillDeck('VILLAIN', [...coreIronManCollection()]);
    onCreateAndFillDeck('HQ', [...coreIronManCollection(), ...coreThorCollection()]);

    onInitializeGame();
  }

  render() {
    return (
      <PlaygroundContainer>
        <Board />
        <PlayingArea />
        <Hand />
      </PlaygroundContainer>
    );
  }
}

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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playground);

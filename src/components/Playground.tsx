import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import ShieldAgent from '@/cards/general/ShieldAgent';
import ShieldOperative from '@/cards/general/ShieldOperative';
import styled from '@emotion/styled';
import Card from './Card';
import { initialise } from '@/actions/gameManager';
import PlayingArea from './PlayingArea';
import Board from './Board';
import StackService from '@/services/stackService';
import EndlessInventionIronMan from '@/cards/core/ironMan/EndlessInventionIronMan';

interface IProps {
  hand: any[];
  deck: any[];
  onInitializeGame: (id, cards) => void;
  onDrawCards: () => void;
  onPlayCard: (card) => void;
}

const PlaygroundContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 600px;
  grid-template-areas: 'board playingarea';
  height: 100vh;
`;

class Playground extends Component<IProps> {
  componentDidMount() {
    const { onInitializeGame } = this.props;

    onInitializeGame('PLAYER_1', [
      new ShieldAgent(),
      new ShieldAgent(),
      new ShieldAgent(),
      new ShieldAgent(),
      new EndlessInventionIronMan(),
      new EndlessInventionIronMan(),
      new EndlessInventionIronMan(),
      new EndlessInventionIronMan(),
    ]);
  }

  render() {
    return (
      <PlaygroundContainer>
        <Board />
        <PlayingArea />
      </PlaygroundContainer>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  onInitializeGame: (id, cards) => {
    dispatch(initialise(id, cards));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playground);

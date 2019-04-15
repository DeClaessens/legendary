import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { drawCardsFromDeck } from '@/actions/deck';
import ShieldAgent from '@/cards/general/shieldAgent';
import ShieldOperative from '@/cards/general/shieldOperative';
import Card from './Card';
import { initialise } from '@/actions/gameManager';
import { playCardFromHand } from '@/actions/hand';

interface IProps {
  hand: any[];
  deck: any[];
  onInitializeGame: (cards) => void;
  onDrawCards: () => void;
  onPlayCard: (card) => void;
}

class Playground extends Component<IProps> {
  componentDidMount() {
    const { onInitializeGame } = this.props;

    onInitializeGame([
      ShieldAgent(),
      ShieldAgent(),
      ShieldAgent(),
      ShieldAgent(),
      ShieldOperative(),
      ShieldOperative(),
      ShieldOperative(),
      ShieldOperative(),
    ]);
  }

  render() {
    const { deck, hand, onDrawCards, onPlayCard } = this.props;
    const playCard = card => {
      onPlayCard(card);
    };

    const drawCard = () => {
      onDrawCards();
    };

    return (
      <Fragment>
        <div>Deck</div>
        <button onClick={drawCard}>Draw 1</button>
        <div>Hand</div>
        {hand && hand.map(card => <Card name={card.name} onPlay={() => playCard(card)} />)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  deck: state.deck,
  hand: state.hand,
});

const mapDispatchToProps = dispatch => ({
  onInitializeGame: cards => {
    dispatch(initialise(cards));
  },
  onDrawCards: () => {
    dispatch(drawCardsFromDeck(1));
  },
  onPlayCard: card => {
    dispatch(playCardFromHand(card));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playground);

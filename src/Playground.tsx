import React, { ReactElement, useState, Component } from 'react';
import CardComponent from './components/Card/Card';
import GameManager from './gameManager/GameManager';
import Hand from './Hand/Hand';
import Card from './cards/Card';

interface IProps {
  manager: GameManager;
}

interface IState {
  cardsInHand: Card[];
}

class Playground extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      cardsInHand: [],
    };
  }
  play = async card => {
    const { manager } = this.props;
    await manager.playCardFromHand(card);
  };

  draw = () => {
    const { manager } = this.props;
    return manager.drawToHand().then(hand => this.setState({ cardsInHand: hand.cards }));
  };
  render() {
    return (
      <div>
        <h1>Playground</h1>
        <button type="button" onClick={this.draw}>
          Draw
        </button>
        {this.state.cardsInHand.map(card => (
          <CardComponent
            name={card.name}
            cost={card.cost}
            recruitValue={card.recruit}
            fightValue={card.fight}
            onPlay={() => this.play(card)}
          />
        ))}
      </div>
    );
  }
}

/* const Playground: React.SFC<IProps> = ({ manager }): ReactElement<any> | null => {
  const play = async card => {
    await manager.playCardFromHand(card);
  };

  const draw = () => {
    return manager.drawToHand().then(() => console.log(manager));
  };

  return (
    <div>
      <h1>Playground</h1>
      <button type="button" onClick={draw}>
        Draw
      </button>
      {manager.hand.cards.map(card => (
        <Card
          name={card.name}
          cost={card.cost}
          recruitValue={card.recruit}
          fightValue={card.fight}
          onPlay={() => play(card)}
        />
      ))}
    </div>
  );
}; */

export default Playground;

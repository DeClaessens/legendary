import React, { ReactElement } from 'react';
import ShieldAgent from './cards/general/ShieldAgent';
import { Deck } from './deck/Deck';
import Stack from './stack/Stack';
import Card from './components/Card/Card';

interface IProps {}

const Playground: React.SFC<IProps> = (props): ReactElement<any> | null => {
  const deck = new Deck();
  const stack = new Stack();

  const play = card => {
    card.play().then(msg => stack.add(msg));
  };

  deck.initializePlayerDeck();

  return (
    <div>
      <h1>Playground</h1>
      {deck.cards.map(card => (
        <Card name={card.name} cost={card.cost} recruitValue={card.recruitValue} fightValue={card.fightValue} />
      ))}
    </div>
  );
};

export default Playground;

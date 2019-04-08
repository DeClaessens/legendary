import React, { ReactElement, useState } from 'react';
import Card from './components/Card/Card';
import GameManager from './gameManager/GameManager';
import Hand from './Hand/Hand';

interface IProps {}

const Playground: React.SFC<IProps> = (props): ReactElement<any> | null => {
  const manager = new GameManager();

  const play = async card => {
    await manager.playCardFromHand(card);
  };

  const draw = () => {
    return manager.drawToHand().then(() => console.log(manager));
  };

  manager.init();

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
};

export default Playground;

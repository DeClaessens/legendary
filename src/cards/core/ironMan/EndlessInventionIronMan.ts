import { uniqueid } from '@/helpers/uid';
import endlessInventionIronManArt from '../../../images/shieldOperative.png';
import { drawCardFromPlayerDeck } from '@/actions/gameManager';
import { store } from '../../../index';

export default class EndlessInventionIronMan {
  id;

  name;

  cost;

  attack;

  recruit;

  deckId;

  imageUrl;

  constructor() {
    this.id = uniqueid();
    this.name = 'Endless Invention - Iron Man';
    this.cost = 3;
    this.attack = 0;
    this.recruit = 0;
    this.deckId = null;
    this.imageUrl = endlessInventionIronManArt;
  }

  action() {
    store.dispatch(drawCardFromPlayerDeck(this.deckId));
    return Promise.resolve(true);
  }
}

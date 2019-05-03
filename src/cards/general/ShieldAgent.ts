import { uniqueid } from '@/helpers/uid';
import shieldAgentArt from '../../images/shieldAgent.jpg';

export default class shieldAgent {
  id;

  name;

  cost;

  attack;

  recruit;

  deckId;

  imageUrl;

  constructor() {
    this.id = uniqueid();
    this.name = 'Shield Agent';
    this.cost = 0;
    this.attack = 0;
    this.recruit = 1;
    this.deckId = null;
    this.imageUrl = shieldAgentArt;
  }

  action() {
    return Promise.resolve(false);
  }
}

import { uniqueid } from '@/helpers/uid';
import shieldAgentArt from '../../images/shieldAgent.jpg';
import { HeroClass } from '@/helpers/heroClasses';

export default class shieldAgent {
  id;

  name;

  cost;

  attack;

  recruit;

  deckId;

  heroClass;

  imageUrl;

  constructor() {
    this.id = uniqueid();
    this.name = 'Shield Agent';
    this.cost = 0;
    this.attack = 0;
    this.recruit = 1;
    this.deckId = null;
    this.heroClass = HeroClass.BASIC;
    this.imageUrl = shieldAgentArt;
  }

  action() {
    return Promise.resolve(true);
  }
}
